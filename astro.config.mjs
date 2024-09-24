import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://verse-astro.vercel.app/",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  experimental: {
    contentCollectionCache: true,
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime],
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
