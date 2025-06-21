import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const tripsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/trips" }), // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    img: image().optional(),
    alt: z.string(),
    date: z.date(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string())
  }),
});

const flightsCollection = defineCollection({
  loader: file("src/content/flights/flights.json"),
  schema: z.object({
    id: z.string(),
    number: z.string(),
    airline: z.string(),
    origin: z.string(),
    originGate: z.string().optional(),
    originCity: z.string(),
    destination: z.string(),
    destinationGate: z.string().optional(),
    destinationCity: z.string(),
    scheduledDeparture: z.coerce.date(),
    actualDeparture: z.coerce.date(),
    scheduledArrival: z.coerce.date(),
    actualArrival: z.coerce.date(),
    milesTraveled: z.number(),
    plane: z.string().optional()
  }),
});


export const collections = {
  'trips': tripsCollection,
  'blog': blogCollection,
  'flights': flightsCollection
};