"use client"

import { useGameStore } from '@/store/game';
import { Pokemon } from '@/types/pokemon';
import { getImage } from '@/utils/getImage';

interface Props {
  pokemon: Pokemon;
}

export function PokemonImage({ pokemon }: Props) {
  const { showPokemon } = useGameStore();

  return (
    <img alt="" src={getImage(pokemon)} data-show={showPokemon} draggable={false} className="h-80 mx-auto my-16 data-[show=false]:brightness-0 grayscale-0 transition-all" />
  )
}
