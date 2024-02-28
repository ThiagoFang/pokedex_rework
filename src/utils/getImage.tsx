import { Pokemon } from "@/types/pokemon";

export function getImage(pokemon: Pokemon) {
  if (pokemon.sprites.other.dream_world.front_default) {
    return pokemon.sprites.other.dream_world.front_default
  }
  if (pokemon.sprites.other["official-artwork"].front_default) {
    return pokemon.sprites.other["official-artwork"].front_default
  }
  return pokemon.sprites.front_default
}