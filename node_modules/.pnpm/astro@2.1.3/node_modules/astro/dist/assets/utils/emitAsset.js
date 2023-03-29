import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { rootRelativePath } from "../../core/util.js";
import { imageMetadata } from "./metadata.js";
async function emitESMImage(id, watchMode, fileEmitter, settings) {
  const url = pathToFileURL(id);
  const meta = await imageMetadata(url);
  if (!meta) {
    return;
  }
  if (!watchMode) {
    const pathname = decodeURI(url.pathname);
    const filename = path.basename(pathname, path.extname(pathname) + `.${meta.format}`);
    const handle = fileEmitter({
      name: filename,
      source: await fs.promises.readFile(url),
      type: "asset"
    });
    meta.src = `__ASTRO_ASSET_IMAGE__${handle}__`;
  } else {
    url.searchParams.append("origWidth", meta.width.toString());
    url.searchParams.append("origHeight", meta.height.toString());
    url.searchParams.append("origFormat", meta.format);
    meta.src = rootRelativePath(settings.config, url);
  }
  return meta;
}
export {
  emitESMImage
};
