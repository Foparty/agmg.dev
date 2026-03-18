import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
