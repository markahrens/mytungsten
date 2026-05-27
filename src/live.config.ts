import { z } from "astro:content";
import { defineAtProtoLiveCollection } from "@fujocoded/astro-atproto-loader";

const puzzmoCollection = defineAtProtoLiveCollection({
  source: {
    repo: "did:plc:evbto4bepchfkz2prgfsqp2v",
    collection: "com.puzzmo.streak",
  },
  outputSchema: z.object({
    gameDisplayName: z.string(),
    gameSlug: z.string(),
    total: z.number(),
    current: z.number(),
    max: z.number(),
    lastUpdated: z.iso.datetime()
  }),
});


export const collections = {
  'puzzmo': puzzmoCollection
};