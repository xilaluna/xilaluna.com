import { fileURLToPath, pathToFileURL } from "node:url";
function pathify(path) {
  if (path.startsWith("file://")) {
    path = fileURLToPath(path);
  }
  return path;
}
function instantiateEmscriptenWasm(factory, path, workerJS = "") {
  return factory({
    locateFile(requestPath) {
      if (requestPath.endsWith(".wasm"))
        return pathify(path);
      if (requestPath.endsWith(".worker.js"))
        return pathify(workerJS);
      return requestPath;
    }
  });
}
function dirname(url) {
  return url.substring(0, url.lastIndexOf("/"));
}
function getModuleURL(url) {
  if (!url) {
    return pathToFileURL(__dirname).toString();
  }
  return url;
}
export {
  dirname,
  getModuleURL,
  instantiateEmscriptenWasm,
  pathify
};
