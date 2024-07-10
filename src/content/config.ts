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
    description: z.string(),
    excerpt: z.string(),
    categories: z.array(z.string()),
    cover: z.string(),
    github: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  blog,
  projects,
};
