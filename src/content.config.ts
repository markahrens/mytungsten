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
  loader: glob({ pattern: "**/*.json", base: "./src/content/flights" }),
  schema: z.object({
    flightNumber: z.string(),
    flightStatus: z.string(),
    departure: z.object({
      airportCode: z.string(),
      airportName: z.string(),
      scheduledTime: z.string().datetime({ offset: true }),
      actualTime: z.string().datetime({ offset: true }).nullable(),
      scheduledRunwayTime: z.string().datetime({ offset: true }).nullable(),
      actualRunwayTime: z.string().datetime({ offset: true }).nullable(),
      terminal: z.string().nullable(),
      gate: z.string().nullable(),
      baggageClaim: z.string().nullable()
    }),
    arrival: z.object({
      airportCode: z.string(),
      airportName: z.string(),
      scheduledTime: z.string().datetime({ offset: true }),
      actualTime: z.string().datetime({ offset: true }).nullable(),
      scheduledRunwayTime: z.string().datetime({ offset: true }).nullable(),
      actualRunwayTime: z.string().datetime({ offset: true }).nullable(),
      terminal: z.string().nullable(),
      gate: z.string().nullable(),
      baggageClaim: z.string().nullable()
    })
  }),
});


export const collections = {
  'trips': tripsCollection,
  'blog': blogCollection,
  'flights': flightsCollection
};