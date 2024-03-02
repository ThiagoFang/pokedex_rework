"use client";

import { useSearchParams } from 'next/navigation';
import { Pagination } from './components/Pagination';
import { PokemonGrid } from './components/PokemonGrid';
import { Suspense } from 'react';

import PokemonSearchInput from './components/PokemonSearchInput';

function PokemonsPage() {

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  return (
    <div className='max-w-7xl space-y-16 mt-8 mx-auto'>
      <PokemonSearchInput />

      <Suspense key={page} fallback={<div>Loading...</div>}>
        <PokemonGrid page={page} />
      </Suspense>

      <Pagination page={page} />
    </div>
  )
};

export default PokemonsPage