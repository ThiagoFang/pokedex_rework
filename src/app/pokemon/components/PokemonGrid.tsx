import { getPokemonList } from '@/utils/fetch/getPokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
  page: number;
}

export async function PokemonGrid({ page }: Props) {
  const response = await getPokemonList(page);
  const list = response ?? [];

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16'>
      {list.map((pokemon, index) => (
        <PokemonCard name={pokemon.name} key={index} />
      ))}
    </div>
  )
}
