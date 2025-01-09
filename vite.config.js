import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        privacy: "./src/pages/privacy.html",
        terms: "./src/pages/terms.html",
      },
    },
  },
});