import { Card, Title } from '@/components'
import { EvolutionChain } from '@/types/evolutionChain';
import { getEvolutionsByUrl } from '@/utils/fetch/getEvolutionChain';
import React from 'react'
import { EvolutionBox } from './EvolutionBox';

interface Props {
  url: string;
}

export async function EvolutionChain({ url }: Props) {
  const evolutions = await getEvolutionsByUrl(url);

  if (!evolutions) return;

  if (!evolutions.chain.evolves_to.length) {
    return (
      <Card className="mx-auto max-w-7xl mt-8 animate-fade-up w-max animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
        <Title className='p-8 text-center font-medium tracking-wide'>
          This Pokémon does not have any evolutions to display
        </Title>
      </Card>
    )
  }

  if (evolutions.chain.evolves_to.length === 1)
    return (
      <div className='mt-8 grid gap-6 max-w-7xl mx-auto'>
        <Title>Evoluções do Pokemon</Title>
        <div className='grid grid-cols-2 gap-8'>
          {getSimpleChain(evolutions.chain).map((evolution, index) => (
            <EvolutionBox name={evolution.name} key={index} />
          ))}
        </div>
      </div>
    )

  if (evolutions.chain.evolves_to.length > 1) {
    return (
      <Card className="mx-auto max-w-7xl mt-8 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
        <div>complex evolution</div>
      </Card>
    )
  }
}

const getSimpleChain = (chain: EvolutionChain["chain"]) => {
  return chain.evolves_to.flatMap(evo => {
    const evolutions = [{ name: evo.species.name, baby: evo.is_baby }];

    if (evo.evolves_to.length) {
      evolutions.push(
        ...evo.evolves_to.map(subEvo => ({
          name: subEvo.species.name,
          baby: subEvo.is_baby,
        }))
      );
    }

    return evolutions;
  });
};