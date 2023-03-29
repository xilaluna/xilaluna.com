import type { MarkdownVFile } from './types.js';
export declare function rehypeImages(imageService: any, assetsDir: URL | undefined): () => (tree: any, file: MarkdownVFile) => void;
