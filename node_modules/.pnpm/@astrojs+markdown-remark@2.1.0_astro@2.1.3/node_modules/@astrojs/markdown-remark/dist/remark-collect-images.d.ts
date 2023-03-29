import type { VFile } from 'vfile';
declare type OptionalResolveImage = ((path: string) => Promise<string>) | undefined;
export default function toRemarkCollectImages(resolveImage: OptionalResolveImage): () => (tree: any, vfile: VFile) => Promise<void>;
export {};
