import {
  createScopedResult,
  renderSlot,
  ScopeFlags,
  stringifyChunk
} from "../../runtime/server/index.js";
import { renderJSX } from "../../runtime/server/jsx.js";
import { AstroCookies } from "../cookies/index.js";
import { AstroError, AstroErrorData } from "../errors/index.js";
import { warn } from "../logger/core.js";
const clientAddressSymbol = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a;
  if (!slot)
    return;
  if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  #result;
  #slots;
  #loggingOpts;
  constructor(result, slots, logging) {
    this.#result = result;
    this.#slots = slots;
    this.#loggingOpts = logging;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots)
      return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name))
      return;
    const scoped = createScopedResult(this.#result, ScopeFlags.RenderSlot);
    if (!Array.isArray(args)) {
      warn(
        this.#loggingOpts,
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(scoped) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = () => expression(...args);
        return await renderSlot(scoped, slot).then((res) => res != null ? String(res) : res);
      }
      if (typeof component === "function") {
        return await renderJSX(scoped, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(scoped, this.#slots[name]);
    const outHTML = stringifyChunk(scoped, content);
    return outHTML;
  }
}
let renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers, request, resolve } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    scope: 0,
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
export {
  createResult
};
