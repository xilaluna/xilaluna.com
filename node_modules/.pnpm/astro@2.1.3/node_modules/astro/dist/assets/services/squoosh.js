import { baseService, parseQuality } from "./service.js";
import { processBuffer } from "./vendor/squoosh/image-pool.js";
const baseQuality = { low: 25, mid: 50, high: 80, max: 100 };
const qualityTable = {
  avif: {
    max: 62,
    high: 45,
    mid: 35,
    low: 20
  },
  jpeg: baseQuality,
  jpg: baseQuality,
  webp: baseQuality
};
const service = {
  getURL: baseService.getURL,
  parseURL: baseService.parseURL,
  getHTMLAttributes: baseService.getHTMLAttributes,
  async transform(inputBuffer, transformOptions) {
    const transform = transformOptions;
    let format = transform.format;
    if (!format) {
      format = "webp";
    }
    const operations = [];
    if (transform.height && !transform.width) {
      operations.push({
        type: "resize",
        height: transform.height
      });
    } else if (transform.width) {
      operations.push({
        type: "resize",
        width: transform.width
      });
    }
    let quality = void 0;
    if (transform.quality) {
      const parsedQuality = parseQuality(transform.quality);
      if (typeof parsedQuality === "number") {
        quality = parsedQuality;
      } else {
        quality = transform.quality in qualityTable[format] ? qualityTable[format][transform.quality] : void 0;
      }
    }
    const data = await processBuffer(inputBuffer, operations, format, quality);
    return {
      data: Buffer.from(data),
      format
    };
  }
};
var squoosh_default = service;
export {
  squoosh_default as default
};
