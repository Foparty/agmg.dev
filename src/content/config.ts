import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date().optional(),
  }),
});
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string(),
    categories: z.array(z.string()).optional(),
    cover: z.string().optional(),
    github: z.string().optional(),
    site: z.string().optional(),
    live: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  blog,
  projects,
};
