import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ahmedinfajic.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
