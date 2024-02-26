import { Card, Text, Title } from "@/components";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { ChevronRight } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
}

export async function EvolutionBox({ name }: Props) {
  const pokemon = await getPokemon(name);

  if (pokemon)
    return (
      <Card className="relative overflow-hidden p-12 border-l-4 pl-48">
        <Image alt="" src={pokemon.sprites.other.dream_world.front_default} width={150} height={200} className="absolute left-4 top-4 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" />
        <Title className="capitalize min-w-48">
          {pokemon.name} <span className="opacity-60">#{pokemon.id}</span>
        </Title>
        <Link href={`/pokemon/${name}`} draggable={false} className="select-none active:opacity-70">
          <Text className="flex items-center leading-3">Ver Detalhes <ChevronRight size={14} className="mt-0.5" /></Text>
        </Link>
      </Card>
    )
}