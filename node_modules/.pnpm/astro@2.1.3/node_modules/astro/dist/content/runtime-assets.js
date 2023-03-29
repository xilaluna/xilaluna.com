import { z } from "zod";
import { imageMetadata } from "../assets/utils/metadata.js";
function createImage(options) {
  return () => {
    if (options.assetsDir === "undefined") {
      throw new Error("Enable `experimental.assets` in your Astro config to use image()");
    }
    return z.string().transform(async (imagePath) => {
      const fullPath = new URL(imagePath, options.assetsDir);
      return await getImageMetadata(fullPath);
    });
  };
}
async function getImageMetadata(imagePath) {
  const meta = await imageMetadata(imagePath);
  if (!meta) {
    return void 0;
  }
  delete meta.orientation;
  return { ...meta, __astro_asset: true };
}
export {
  createImage
};
