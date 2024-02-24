import { Card, Text, Title } from "@/components";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { PokemonStats } from "./components/PokemonStats";
import { getSpecies } from "@/utils/fetch/getSpecies";
import { colorsByType } from "@/utils/data/ColorsByType";
import { EvolutionChain } from "./components/EvolutionChain";

import Image from "next/image";

interface Props {
	params: {
		slug: string;
	}
}

export default async function PokemonsPage({ params }: Props) {
	const pokemon = await getPokemon(params.slug);
	const species = await getSpecies(params.slug);
	const color = colorsByType[pokemon?.types[0].type.name ?? "bug"]

	if (pokemon && species)
		return (
			<main className="py-16 mt-16">
				<div className="flex gap-4 mx-auto flex-1 w-max max-w-7xl">
					<Image alt="" src={pokemon.sprites.other.dream_world.front_default} width={450} height={450} className="animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" />
					<Card className="max-w-sm animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
						<Text className="font-semibold">
							#{pokemon.id}
						</Text>
						<Title className="font-bold text-4xl capitalize">
							{pokemon.name}
						</Title>

						<Text className="mt-1">{species.flavor_text_entries[1].flavor_text}</Text>

						<PokemonStats stats={pokemon.stats} />
					</Card>
				</div>

				<EvolutionChain url={species.evolution_chain.url} />
			</main>
		)
}
