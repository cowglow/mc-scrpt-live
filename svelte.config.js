import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

const dev = process.env.NODE_ENV === "development";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    paths: {
      base: dev ? "" : "/mc-scrpt-live",
    },
    appDir: "internal",
    adapter: adapter({
      fallback: "index.html",
    }),
    vite: {
      resolve: {
        alias: {
          $components: path.resolve("./src/components"),
          $lib: path.resolve("./src/lib"),
        },
      },
    },
  },
};

export default config;
