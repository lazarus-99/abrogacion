import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    party: z.string(),
    cover: z.string(),
    category: z.string(),
    isSupportive: z.boolean(),
  }),
});

export const collections = { posts };
