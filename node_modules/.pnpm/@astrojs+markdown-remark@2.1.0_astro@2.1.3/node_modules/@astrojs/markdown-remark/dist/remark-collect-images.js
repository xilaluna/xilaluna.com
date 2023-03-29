import { visit } from "unist-util-visit";
function toRemarkCollectImages(resolveImage) {
  return () => async function(tree, vfile) {
    if (typeof (vfile == null ? void 0 : vfile.path) !== "string")
      return;
    const imagePaths = /* @__PURE__ */ new Set();
    visit(tree, "image", function raiseError(node) {
      imagePaths.add(node.url);
    });
    if (imagePaths.size === 0) {
      vfile.data.imagePaths = [];
      return;
    } else if (resolveImage) {
      const mapping = /* @__PURE__ */ new Map();
      for (const path of Array.from(imagePaths)) {
        const id = await resolveImage(path);
        mapping.set(path, id);
      }
      visit(tree, "image", function raiseError(node) {
        node.url = mapping.get(node.url);
      });
    }
    vfile.data.imagePaths = Array.from(imagePaths);
  };
}
export {
  toRemarkCollectImages as default
};
