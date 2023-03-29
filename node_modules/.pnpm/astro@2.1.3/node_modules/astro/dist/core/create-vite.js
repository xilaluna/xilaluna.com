import nodeFs from "fs";
import { fileURLToPath } from "url";
import * as vite from "vite";
import { crawlFrameworkPkgs } from "vitefu";
import astroAssetsPlugin from "../assets/vite-plugin-assets.js";
import {
  astroContentAssetPropagationPlugin,
  astroContentImportPlugin,
  astroContentVirtualModPlugin
} from "../content/index.js";
import astroPostprocessVitePlugin from "../vite-plugin-astro-postprocess/index.js";
import { vitePluginAstroServer } from "../vite-plugin-astro-server/index.js";
import astroVitePlugin from "../vite-plugin-astro/index.js";
import configAliasVitePlugin from "../vite-plugin-config-alias/index.js";
import envVitePlugin from "../vite-plugin-env/index.js";
import astroHeadPropagationPlugin from "../vite-plugin-head-propagation/index.js";
import htmlVitePlugin from "../vite-plugin-html/index.js";
import { astroInjectEnvTsPlugin } from "../vite-plugin-inject-env-ts/index.js";
import astroIntegrationsContainerPlugin from "../vite-plugin-integrations-container/index.js";
import jsxVitePlugin from "../vite-plugin-jsx/index.js";
import astroLoadFallbackPlugin from "../vite-plugin-load-fallback/index.js";
import markdownVitePlugin from "../vite-plugin-markdown/index.js";
import astroScannerPlugin from "../vite-plugin-scanner/index.js";
import astroScriptsPlugin from "../vite-plugin-scripts/index.js";
import astroScriptsPageSSRPlugin from "../vite-plugin-scripts/page-ssr.js";
import { vitePluginSSRManifest } from "../vite-plugin-ssr-manifest/index.js";
const ALWAYS_NOEXTERNAL = [
  "astro",
  "astro/components",
  "@nanostores/preact",
  "@fontsource/*"
];
const ONLY_DEV_EXTERNAL = [
  "shiki",
  "prismjs/components/index.js"
];
async function createVite(commandConfig, { settings, logging, mode, command, fs = nodeFs }) {
  var _a, _b;
  const astroPkgsConfig = await crawlFrameworkPkgs({
    root: fileURLToPath(settings.config.root),
    isBuild: mode === "build",
    viteUserConfig: settings.config.vite,
    isFrameworkPkgByJson(pkgJson) {
      var _a2, _b2, _c, _d, _e;
      if (((_a2 = pkgJson == null ? void 0 : pkgJson.astro) == null ? void 0 : _a2.external) === true) {
        return false;
      }
      return ((_b2 = pkgJson.peerDependencies) == null ? void 0 : _b2.astro) || ((_c = pkgJson.dependencies) == null ? void 0 : _c.astro) || ((_d = pkgJson.keywords) == null ? void 0 : _d.includes("astro")) || ((_e = pkgJson.keywords) == null ? void 0 : _e.includes("astro-component")) || /^(@[^\/]+\/)?astro\-/.test(pkgJson.name);
    },
    isFrameworkPkgByName(pkgName) {
      const isNotAstroPkg = isCommonNotAstro(pkgName);
      if (isNotAstroPkg) {
        return false;
      } else {
        return void 0;
      }
    }
  });
  const commonConfig = {
    cacheDir: fileURLToPath(new URL("./node_modules/.vite/", settings.config.root)),
    clearScreen: false,
    logLevel: "warn",
    appType: "custom",
    optimizeDeps: {
      entries: ["src/**/*"],
      exclude: ["astro", "node-fetch"]
    },
    plugins: [
      configAliasVitePlugin({ settings }),
      astroLoadFallbackPlugin({ fs, root: settings.config.root }),
      astroVitePlugin({ settings, logging }),
      astroScriptsPlugin({ settings }),
      mode !== "build" && vitePluginAstroServer({ settings, logging, fs }),
      envVitePlugin({ settings }),
      markdownVitePlugin({ settings, logging }),
      htmlVitePlugin(),
      jsxVitePlugin({ settings, logging }),
      astroPostprocessVitePlugin({ settings }),
      astroIntegrationsContainerPlugin({ settings, logging }),
      astroScriptsPageSSRPlugin({ settings }),
      astroHeadPropagationPlugin({ settings }),
      astroScannerPlugin({ settings }),
      astroInjectEnvTsPlugin({ settings, logging, fs }),
      astroContentVirtualModPlugin({ settings }),
      astroContentImportPlugin({ fs, settings }),
      astroContentAssetPropagationPlugin({ mode, settings }),
      vitePluginSSRManifest(),
      settings.config.experimental.assets ? [astroAssetsPlugin({ settings, logging, mode })] : []
    ],
    publicDir: fileURLToPath(settings.config.publicDir),
    root: fileURLToPath(settings.config.root),
    envPrefix: ((_a = settings.config.vite) == null ? void 0 : _a.envPrefix) ?? "PUBLIC_",
    define: {
      "import.meta.env.SITE": settings.config.site ? JSON.stringify(settings.config.site) : "undefined"
    },
    server: {
      hmr: process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production" ? false : void 0,
      proxy: {},
      watch: {
        ignored: mode === "build" ? ["**"] : void 0
      }
    },
    resolve: {
      alias: [
        {
          find: "randombytes",
          replacement: "randombytes/browser"
        },
        {
          find: /^astro$/,
          replacement: fileURLToPath(new URL("../@types/astro", import.meta.url))
        }
      ],
      conditions: ["astro"],
      dedupe: ["astro"]
    },
    ssr: {
      noExternal: [...ALWAYS_NOEXTERNAL, ...astroPkgsConfig.ssr.noExternal],
      external: [...mode === "dev" ? ONLY_DEV_EXTERNAL : [], ...astroPkgsConfig.ssr.external]
    }
  };
  let result = commonConfig;
  if (command && ((_b = settings.config.vite) == null ? void 0 : _b.plugins)) {
    let { plugins, ...rest } = settings.config.vite;
    const applyToFilter = command === "build" ? "serve" : "build";
    const applyArgs = [
      { ...settings.config.vite, mode },
      { command, mode }
    ];
    plugins = plugins.flat(Infinity).filter((p) => {
      if (!p || (p == null ? void 0 : p.apply) === applyToFilter) {
        return false;
      }
      if (typeof p.apply === "function") {
        return p.apply(applyArgs[0], applyArgs[1]);
      }
      return true;
    });
    result = vite.mergeConfig(result, { ...rest, plugins });
  } else {
    result = vite.mergeConfig(result, settings.config.vite || {});
  }
  result = vite.mergeConfig(result, commandConfig);
  if (result.plugins) {
    sortPlugins(result.plugins);
  }
  result.customLogger = vite.createLogger(result.logLevel ?? "warn");
  return result;
}
function isVitePlugin(plugin) {
  return Boolean(plugin == null ? void 0 : plugin.hasOwnProperty("name"));
}
function findPluginIndexByName(pluginOptions, name) {
  return pluginOptions.findIndex(function(pluginOption) {
    return isVitePlugin(pluginOption) && pluginOption.name === name;
  });
}
function sortPlugins(pluginOptions) {
  const mdxPluginIndex = findPluginIndexByName(pluginOptions, "@mdx-js/rollup");
  if (mdxPluginIndex === -1)
    return;
  const jsxPluginIndex = findPluginIndexByName(pluginOptions, "astro:jsx");
  const mdxPlugin = pluginOptions[mdxPluginIndex];
  pluginOptions.splice(mdxPluginIndex, 1);
  pluginOptions.splice(jsxPluginIndex, 0, mdxPlugin);
}
const COMMON_DEPENDENCIES_NOT_ASTRO = [
  "autoprefixer",
  "react",
  "react-dom",
  "preact",
  "preact-render-to-string",
  "vue",
  "svelte",
  "solid-js",
  "lit",
  "cookie",
  "dotenv",
  "esbuild",
  "eslint",
  "jest",
  "postcss",
  "prettier",
  "astro",
  "tslib",
  "typescript",
  "vite"
];
const COMMON_PREFIXES_NOT_ASTRO = [
  "@webcomponents/",
  "@fontsource/",
  "@postcss-plugins/",
  "@rollup/",
  "@astrojs/renderer-",
  "@types/",
  "@typescript-eslint/",
  "eslint-",
  "jest-",
  "postcss-plugin-",
  "prettier-plugin-",
  "remark-",
  "rehype-",
  "rollup-plugin-",
  "vite-plugin-"
];
function isCommonNotAstro(dep) {
  return COMMON_DEPENDENCIES_NOT_ASTRO.includes(dep) || COMMON_PREFIXES_NOT_ASTRO.some(
    (prefix) => prefix.startsWith("@") ? dep.startsWith(prefix) : dep.substring(dep.lastIndexOf("/") + 1).startsWith(prefix)
  );
}
export {
  createVite
};
