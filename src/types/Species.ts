import { z } from "zod";

export const SpeciesSchema = z.object({
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
