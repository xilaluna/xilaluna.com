import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
async function copyWasmFiles(dir) {
  const src = new URL("./", import.meta.url);
  await copyDir(fileURLToPath(src), fileURLToPath(dir));
}
async function copyDir(src, dest) {
  const itemNames = await fs.readdir(src);
  await Promise.all(itemNames.map(async (srcName) => {
    const srcPath = path.join(src, srcName);
    const destPath = path.join(dest, srcName);
    const s = await fs.stat(srcPath);
    if (s.isFile() && /.wasm$/.test(srcPath)) {
      await fs.mkdir(path.dirname(destPath), { recursive: true });
      await fs.copyFile(srcPath, destPath);
    } else if (s.isDirectory()) {
      await copyDir(srcPath, destPath);
    }
  }));
}
export {
  copyWasmFiles
};
