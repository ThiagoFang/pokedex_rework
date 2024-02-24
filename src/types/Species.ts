import { z } from "zod";

export const SpeciesSchema = z.object({
  evolution_chain: z.object({
    url: z.string().url(),
  }),
  flavor_text_entries: z.array(
    z.object({
      flavor_text: z.string(),
      language: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    })
  ),
});

export type Species = z.infer<typeof SpeciesSchema>;
