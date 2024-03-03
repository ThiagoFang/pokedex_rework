import { getPokemon } from "@/utils/fetch/getPokemon";
import { getImage } from "@/utils/getImage";
import { tv } from "tailwind-variants";

import Link from "next/link";

const boxVariants = tv({
  base: "relative size-36 sm:size-52 overflow-hidden bg-red-200/10 rounded-lg",
  variants: {
    type: {
      normal: "bg-normal-500/20",
      fire: "bg-fire-500/20",
      water: "bg-water-500/20",
      electric: "bg-electric-500/20",
      grass: "bg-grass-500/20",
      ice: "bg-ice-500/20",
      fighting: "bg-fighting-500/20",
      poison: "bg-poison-500/20",
      ground: "bg-ground-500/20",
      flying: "bg-flying-500/20",
      psychic: "bg-psychic-500/20",
      bug: "bg-bug-500/20",
      rock: "bg-rock-500/20",
      ghost: "bg-ghost-500/20",
      dragon: "bg-dragon-500/20",
      dark: "bg-dark-500/20",
      steel: "bg-steel-500/20",
      fairy: "bg-fairy-500/20",
    }
  }
})

interface Props {
  name: string;
}

export async function EvolutionBox({ name }: Props) {
  const pokemon = await getPokemon(name);

  if (pokemon)
    return (
      <Link href={`/pokemon/${pokemon.name}`} className={boxVariants({ type: pokemon.types[0].type.name })}>
        <img src={getImage(pokemon)} className="absolute size-32 sm:size-48 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
      </Link>
    )
}