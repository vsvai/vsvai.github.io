import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import compress from "vite-plugin-compression";
import imageMin from "vite-plugin-imagemin";

const isProd = process.env.NODE_ENV === "production";

// vite.config.js

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    imageMin({
      svgo: {
        // https://github.com/svg/svgo#built-in-plugins
        plugins: [
          { name: "RemoveTitle", active: false },
          { name: "RemoveDescription", active: false },
          { name: "RemoveViewBox", active: false },
          { name: "removeDimensions", active: true },
          { name: "removeScriptElement", active: true },
          { name: "removeStyleElement", active: true },
        ],
      },
    }),
    compress({
      algorithm: "brotliCompress",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",

        // ...
        // List all files you want in your build
      },
    },

    minify: isProd,
  },
  experimental: {
    renderBuiltUrl(
      filename: string,
      { hostType }: { hostType: "js" | "css" | "html" }
    ) {
      if (hostType === "js") {
        return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` };
      } else {
        return { relative: true };
      }
    },
  },
  base: "/",
});
