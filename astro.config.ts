import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  build: {
    client: "./",
  },

  integrations: [qwikdev()],
  adapter: vercel(),
});
