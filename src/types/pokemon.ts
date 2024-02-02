import z from "zod";

export const PokemonSchema = z.object({
  base_experience: z.number(),
  height: z.number(),
  id: z.number(),
  is_default: z.boolean(),
  name: z.string(),
  order: z.number(),
  weight: z.number(),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      effort: z.number(),
      stat: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
  ),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.enum([
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ]),
    })
  ),
  sprites: z.object({
    back_default: z.string(),
    back_female: z.string().nullable(),
    front_default: z.string(),
    front_female: z.string().nullable(),
    other: z.object({
      dream_world: z.object({
        front_default: z.string(),
        front_female: z.string().nullable(),
      }),
      home: z.object({
        front_default: z.string(),
        front_female: z.string().nullable(),
      }),
      "official-artwork": z.object({
        front_default: z.string(),
        front_female: z.string().nullable(),
      }),
    }),
  }),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
