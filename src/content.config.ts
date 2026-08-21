import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
    title: z.string(),
    slug: z.string(),
    expandedName: z.string().optional(),
    shortDescription: z.string(),
    longDescription: z.string(),
    role: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    year: z.union([z.string(), z.number()]).optional(),
    period: z.string().optional(),
    status: z.string().optional(),
    organization: z.string().optional(),
    client: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    responsibilities: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    challenges: z.array(z.string()).default([]),
    solutions: z.array(z.string()).default([]),
    results: z.array(z.string()).default([]),
    architecture: z.array(z.string()).default([]),
    problem: z.string().optional(),
    solution: z.string().optional(),
    implementation: z.string().optional(),
    context: z.string().optional(),
    contribution: z.string().optional(),
    github: z.url().optional(),
    liveUrl: z.url().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
  });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: projectSchema,
});

const projectsId = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects-id' }),
  schema: projectSchema,
});

export const collections = { projects, projectsId };
