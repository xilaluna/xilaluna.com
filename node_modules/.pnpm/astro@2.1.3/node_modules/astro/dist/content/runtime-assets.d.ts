import { z } from 'zod';
import { type Metadata } from '../assets/utils/metadata.js';
export declare function createImage(options: {
    assetsDir: string;
    relAssetsDir: string;
}): () => z.ZodEffects<z.ZodString, (Metadata & {
    __astro_asset: true;
}) | undefined, string>;
