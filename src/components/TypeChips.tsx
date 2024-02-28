import { Pokemon } from "@/types/pokemon";
import { tv } from "tailwind-variants";

const chipStyles = tv({
  base: "flex w-max px-4 py-1 tracking-wide items-center font-medium  gap-1 text-sm capitalize rounded-lg select-none",
  variants: {
    type: {
      normal: "bg-normal-500 text-normal-950",
      fire: "bg-fire-500 text-fire-950",
      water: "bg-water-500 text-water-950",
      electric: "bg-electric-400 text-electric-950",
      grass: "bg-grass-500 text-grass-950",
      ice: "bg-ice-500 text-ice-950",
      fighting: "bg-fighting-500 text-fighting-950",
      poison: "bg-poison-500 text-poison-950",
      ground: "bg-ground-500 text-ground-950",
      flying: "bg-flying-500 text-flying-950",
      psychic: "bg-psychic-500 text-psychic-950",
      bug: "bg-bug-500 text-bug-950",
      rock: "bg-rock-500 text-rock-950",
      ghost: "bg-ghost-500 text-ghost-950",
      dragon: "bg-dragon-500 text-dragon-950",
      dark: "bg-dark-500 text-dark-950",
      steel: "bg-steel-500 text-steel-950",
      fairy: "bg-fairy-500 text-fairy-950",
    }
  },
  defaultVariants: {
    type: "normal",
  },
})

interface Props {
  pokemon: Pokemon;
}

export function TypeChips({ pokemon }: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {pokemon.types.map((item, index) => (
        <div className={chipStyles({ type: item.type.name })} key={index}>
          {item.type.name}
        </div>
      ))}
    </div>
  )
}