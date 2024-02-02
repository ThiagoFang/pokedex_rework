import { Card, Text, Title } from "@/components";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { PokemonStats } from "./components/PokemonStats";

import Image from "next/image";

interface Props {
	params: {
		slug: string;
	}
}

export default async function PokemonsPage({ params }: Props) {
	const pokemon = await getPokemon(params.slug);

	if (pokemon)
		return (
			<main className="py-16 mt-16">
				<div className="bg-red-200 h-full w-1/5 inset-0 -z-10 fixed" />
				<div className="flex gap-4 mx-auto flex-1 w-max max-w-7xl">
					<Image alt="" src={pokemon.sprites.other.dream_world.front_default} width={450} height={450} />
					<Card className="min-w-[460px]">
						<Text className="font-semibold">
							#{pokemon.id}
						</Text>
						<Title className="font-bold text-4xl capitalize">
							{pokemon.name}
						</Title>

						<PokemonStats stats={pokemon.stats} />
					</Card>
				</div>
			</main>
		)
}
