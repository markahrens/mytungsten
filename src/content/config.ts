import { z, defineCollection } from 'astro:content';


const tripsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    img: image().optional(),
    alt: z.string(),
    date: z.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string())
  }),
});


export const collections = {
  'trips': tripsCollection,
  'blog': blogCollection
};