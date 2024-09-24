import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://verse-astro.vercel.app/",

  experimental: {
    contentCollectionCache: true,
  },

  integrations: [
    tailwind(),

    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
});
