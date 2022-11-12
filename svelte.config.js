import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import * as path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      fallback: "index.html"
    }),
    alias: {
      $components: path.resolve("./src/components"),
      $lib: path.resolve("./src/lib"),
      $data: path.resolve("./src/data")
    }
  }
};

export default config;
