import { getPokemonList } from '@/utils/fetch/getPokemon'
import { PokemonCard } from './components/PokemonCard';

import React from 'react'
import PokemonSearchInput from './components/PokemonSearchInput';

async function PokemonsPage() {
  const list = await getPokemonList(1);

  return (
    <div className='max-w-7xl space-y-16 mt-8 mx-auto'>
      <PokemonSearchInput />

      {!!list?.length && (
        <div className='grid grid-cols-4 gap-16'>
          {list.map((pokemon, index) => (
            <PokemonCard name={pokemon.name} key={index} />
          ))}
        </div>
      )}
    </div>
  )
};

export default PokemonsPage