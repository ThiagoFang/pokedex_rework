import { Card, Text, Title } from "@/components";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { PokemonStats } from "./components/PokemonStats";
import { getSpecies } from "@/utils/fetch/getSpecies";
import { EvolutionChain } from "./components/EvolutionChain";

import Image from "next/image";
import { getImage } from "@/utils/getImage";
import { TypeChips } from "@/components/TypeChips";
import { CancelLoading } from "@/components/ui/CancelLoading";

interface Props {
	params: {
		slug: string;
	}
}

export default async function PokemonsPage({ params }: Props) {
	const pokemon = await getPokemon(params.slug);
	const species = await getSpecies(params.slug);

	if (pokemon && species)
		return (
			<main className="py-16 mt-16">
				<CancelLoading />

				<div className="flex gap-4 mx-auto flex-1 w-max max-w-7xl">
					<Image alt="" src={getImage(pokemon)} width={450} height={450} className="animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" />
					<Card className="max-w-sm animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
						<Text className="font-semibold">
							#{pokemon.id}
						</Text>
						<Title className="font-bold text-4xl capitalize">
							{pokemon.name}
						</Title>

						<div className="mt-2">
							<TypeChips pokemon={pokemon} />
						</div>

						<Text className="mt-1">{species.flavor_text_entries[1].flavor_text}</Text>

						<PokemonStats stats={pokemon.stats} />
					</Card>
				</div>

				<EvolutionChain url={species.evolution_chain.url} />
			</main>
		)
}
