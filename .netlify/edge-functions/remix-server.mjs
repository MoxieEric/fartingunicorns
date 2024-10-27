
    export { default } from "../../build/server/server.js";

    export const config = {
      name: "Remix server handler",
      generator: "@netlify/remix-edge-adapter@3.4.2",
      cache: "manual",
      path: "/*",
      excludedPath: ["/.netlify/*","/.DS_Store","/.vite/*","/assets/*","/favicon.ico"],
    };