import fs from "node:fs";
import { AstroError, AstroErrorData } from "../core/errors/index.js";
import { isLocalService } from "./services/service.js";
function isESMImportedImage(src) {
  return typeof src === "object";
}
async function getConfiguredImageService() {
  if (!globalThis.astroAsset.imageService) {
    const { default: service } = await import("virtual:image-service").catch((e) => {
      const error = new AstroError(AstroErrorData.InvalidImageService);
      error.cause = e;
      throw error;
    });
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage(options) {
  const service = await getConfiguredImageService();
  let imageURL = service.getURL(options);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage) {
    imageURL = globalThis.astroAsset.addStaticImage(options);
  }
  return {
    options,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(options) : {}
  };
}
function getStaticImageList() {
  var _a, _b;
  if (!((_a = globalThis == null ? void 0 : globalThis.astroAsset) == null ? void 0 : _a.staticImages)) {
    return [];
  }
  return (_b = globalThis.astroAsset.staticImages) == null ? void 0 : _b.entries();
}
async function generateImage(buildOpts, options, filepath) {
  if (!isESMImportedImage(options.src)) {
    return void 0;
  }
  const imageService = await getConfiguredImageService();
  let serverRoot, clientRoot;
  if (buildOpts.settings.config.output === "server") {
    serverRoot = buildOpts.settings.config.build.server;
    clientRoot = buildOpts.settings.config.build.client;
  } else {
    serverRoot = buildOpts.settings.config.outDir;
    clientRoot = buildOpts.settings.config.outDir;
  }
  const fileData = await fs.promises.readFile(new URL("." + options.src.src, serverRoot));
  const resultData = await imageService.transform(fileData, { ...options, src: options.src.src });
  const finalFileURL = new URL("." + filepath, clientRoot);
  const finalFolderURL = new URL("./", finalFileURL);
  await fs.promises.mkdir(finalFolderURL, { recursive: true });
  await fs.promises.writeFile(finalFileURL, resultData.data);
  return {
    weight: {
      before: Math.trunc(fileData.byteLength / 1024),
      after: Math.trunc(resultData.data.byteLength / 1024)
    }
  };
}
export {
  generateImage,
  getConfiguredImageService,
  getImage,
  getStaticImageList,
  isESMImportedImage
};
