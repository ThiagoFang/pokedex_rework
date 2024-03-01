"use client"

import { cardStyles } from "@/components/Card";
import { useConfigsStore } from "@/store/configs";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { getImage } from "@/utils/getImage";

import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
}

export const PokemonCard = async ({ name }: Props) => {
  const { setIsLoading } = useConfigsStore();

  const pokemon = await getPokemon(name);

  if (pokemon)
    return (
      <Link href={`/pokemon/${name}`} onClick={() => setIsLoading(true)} draggable={false} className={cardStyles({ className: "flex flex-col select-none items-center pt-24 justify-center relative" })}>
        <Image className="absolute -top-6" draggable={false} width={100} height={100} alt="" src={getImage(pokemon)} />
        {pokemon.name}
      </Link>
    )
}
