import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
let sizeOf;
async function imageMetadata(src, data) {
  if (!sizeOf) {
    sizeOf = await import("image-size").then((mod) => mod.default);
  }
  let file = data;
  if (!file) {
    try {
      file = await fs.readFile(src);
    } catch (e) {
      return void 0;
    }
  }
  const { width, height, type, orientation } = await sizeOf(file);
  const isPortrait = (orientation || 0) >= 5;
  if (!width || !height || !type) {
    return void 0;
  }
  return {
    src: fileURLToPath(src),
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}
export {
  imageMetadata
};
