import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./build",
  site: "https://pondlife-astro.netlify.app",
  // Try for URLs like `/posts/slug.html` instead of `/posts/slug/index.html`
  trailingSlash: "never",
});
