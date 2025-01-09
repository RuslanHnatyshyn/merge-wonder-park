import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        main: "./index.html",
        privacy: "./src/pages/privacy/index.html",
        terms: "./src/pages/terms/index.html",
      },
    },
  },
});