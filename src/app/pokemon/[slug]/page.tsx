import { Card, Text, Title } from "@/components";
import { getPokemon } from "@/utils/fetch/getPokemon";
import { PokemonStats } from "./components/PokemonStats";
import { getSpecies } from "@/utils/fetch/getSpecies";
import { EvolutionChain } from "./components/EvolutionChain";
import { getImage } from "@/utils/getImage";
import { TypeChips } from "@/components/TypeChips";
import { CancelLoading } from "@/components/ui/CancelLoading";

import Image from "next/image";

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
					<Card className="max-w-sm overflow-hidden animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
						<Text className="font-semibold animate-fade-left animate-once animate-duration-700 animate-delay-500 animate-ease-in-out">
							#{pokemon.id}
						</Text>
						<Title className="font-bold text-4xl capitalize animate-fade-left animate-once animate-duration-1000 animate-delay-150 animate-ease-in-out">
							{pokemon.name}
						</Title>

						<div className="mt-2 animate-fade animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out">
							<TypeChips pokemon={pokemon} />
						</div>

						<Text className="mt-1">{species.flavor_text_entries[1].flavor_text}</Text>

						<div className="animate-fade-up animate-once animate-duration-1500 animate-delay-500 animate-ease-in-out">
							<PokemonStats stats={pokemon.stats} />
						</div>
					</Card>
				</div>

				<EvolutionChain url={species.evolution_chain.url} />
			</main>
		)
}
