import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    summary: z.string(),
    cover: image().optional(), // replaces the generated SVG art
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.url() }))
      .default([]),
    year: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { blog, projects };
