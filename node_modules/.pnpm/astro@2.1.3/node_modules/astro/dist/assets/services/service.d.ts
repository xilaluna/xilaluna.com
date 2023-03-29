/// <reference types="node" />
import type { ImageTransform, OutputFormat } from '../types.js';
export type ImageService = LocalImageService | ExternalImageService;
export declare function isLocalService(service: ImageService | undefined): service is LocalImageService;
export declare function parseQuality(quality: string): string | number;
interface SharedServiceProps {
    /**
     * Return the URL to the endpoint or URL your images are generated from.
     *
     * For a local service, your service should expose an endpoint handling the image requests, or use Astro's at `/_image`.
     *
     * For external services, this should point to the URL your images are coming from, for instance, `/_vercel/image`
     *
     */
    getURL: (options: ImageTransform) => string;
    /**
     * Return any additional HTML attributes separate from `src` that your service requires to show the image properly.
     *
     * For example, you might want to return the `width` and `height` to avoid CLS, or a particular `class` or `style`.
     * In most cases, you'll want to return directly what your user supplied you, minus the attributes that were used to generate the image.
     */
    getHTMLAttributes?: (options: ImageTransform) => Record<string, any>;
}
export type ExternalImageService = SharedServiceProps;
type LocalImageTransform = {
    src: string;
    [key: string]: any;
};
export interface LocalImageService extends SharedServiceProps {
    /**
     * Parse the requested parameters passed in the URL from `getURL` back into an object to be used later by `transform`
     *
     * In most cases, this will get query parameters using, for example, `params.get('width')` and return those.
     */
    parseURL: (url: URL) => LocalImageTransform | undefined;
    /**
     * Performs the image transformations on the input image and returns both the binary data and
     * final image format of the optimized image.
     */
    transform: (inputBuffer: Buffer, transform: LocalImageTransform) => Promise<{
        data: Buffer;
        format: OutputFormat;
    }>;
}
export type BaseServiceTransform = {
    src: string;
    width?: number;
    height?: number;
    format?: string | null;
    quality?: string | null;
};
/**
 * Basic local service using the included `_image` endpoint.
 * This service intentionally does not implement `transform`.
 *
 * Example usage:
 * ```ts
 * const service = {
 *  getURL: baseService.getURL,
 *  parseURL: baseService.parseURL,
 *  getHTMLAttributes: baseService.getHTMLAttributes,
 *  async transform(inputBuffer, transformOptions) {...}
 * }
 * ```
 *
 * This service adhere to the included services limitations:
 * - Remote images are passed as is.
 * - Only a limited amount of formats are supported.
 * - For remote images, `width` and `height` are always required.
 *
 */
export declare const baseService: Omit<LocalImageService, 'transform'>;
export {};
