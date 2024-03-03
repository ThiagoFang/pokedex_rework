"use client";

import { useSearchParams } from 'next/navigation';
import { Pagination } from './components/Pagination';
import { PokemonGrid } from './components/PokemonGrid';
import { Suspense } from 'react';

import PokemonSearchInput from './components/PokemonSearchInput';
import { PokemonListLoading } from './components/PokemonListLoading';

function PokemonsPage() {

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  return (
    <div className='max-w-7xl max-sm:pb-16 space-y-10 lg:space-y-16 mt-8 mx-auto'>
      <PokemonSearchInput />

      <Suspense key={page} fallback={<PokemonListLoading />}>
        <PokemonGrid page={page} />
      </Suspense>

      <Pagination page={page} />
    </div>
  )
};

export default PokemonsPage