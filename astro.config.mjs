import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ahmedinfajic.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
