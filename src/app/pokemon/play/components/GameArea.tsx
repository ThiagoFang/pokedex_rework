"use client"

import { Score } from './Score'
import { PokemonImage } from './PokemonImage'
import { Input } from './Input'
import { getRandomPokemon } from '@/utils/fetch/getPokemon'
import { useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';
import { useGameStore } from '@/store/game'

export function GameArea() {
  const [pokemon, setShowPokemon] = useState<Pokemon | undefined>();
  const { round } = useGameStore();

  const getPokemon = async () => {
    const randomPokemon = await getRandomPokemon();
    if (!randomPokemon) return;

    setShowPokemon(randomPokemon);
  }

  useEffect(() => {
    getPokemon();
  }, [round]);

  if (!pokemon) return;
  return (
    <div>
      <Score />
      <PokemonImage pokemon={pokemon} />
      <Input pokemon={pokemon.name} />
    </div>
  )
}
