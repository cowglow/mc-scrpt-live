import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({}),
    vite: {
      resolve: {
        alias: {
          $components: path.resolve("./src/components"),
          $lib: path.resolve("./src/lib")
        }
      }
    }
  }
};

export default config;
