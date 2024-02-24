import { Card } from '@/components'
import { getEvolutionsByUrl } from '@/utils/fetch/getEvolutionChain';
import React from 'react'

interface Props {
  url: string;
}

export async function EvolutionChain({ url }: Props) {
  const evolutions = await getEvolutionsByUrl(url);
  console.log(evolutions?.chain.evolves_to.length)

  if (!evolutions) return;

  if (!evolutions.chain.evolves_to.length) {
    return (
      <Card className="mx-auto max-w-7xl mt-8">
        This pokemon does no have evolutions to show
      </Card>
    )
  }

  if (evolutions.chain.evolves_to.length === 1)
    return (
      <Card className="mx-auto max-w-7xl mt-8">
        <div>simple evolution</div>
      </Card>
    )

  if (evolutions.chain.evolves_to.length > 1) {
    return (
      <Card className="mx-auto max-w-7xl mt-8">
        <div>complex evolution</div>
      </Card>
    )
  }
}