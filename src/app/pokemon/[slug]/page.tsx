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

	if (!pokemon || !species) {
		return (
			<div className="p-4 flex flex-col text-center py-16 items-center justify-center">
				<CancelLoading />
				<Image src="/team_rocket.png" alt="" className="animate-fade-up animate-once animate-duration-700 animate-ease-in-out" width={200} height={250} />
				<Title className="my-1 animate-fade-up animate-once animate-duration-700 animate-ease-in-out animate-delay-100">Looks like Team Rocket got here ahead of us</Title>
				<Text className="animate-fade-up animate-once animate-duration-700 animate-ease-in-out animate-delay-200">No Pokémon named <span className="font-medium">{params.slug}</span> was located</Text>
			</div>
		)
	}

	if (pokemon && species)
		return (
			<main className="p-4 lg:py-16 md:py-10 md:pt-10 lg:mt-16">
				<CancelLoading />

				<div className="flex flex-col md:flex-row mx-auto flex-1 md:w-max max-w-7xl">
					<img className="animate-fade-up max-md:w-40 md:h-48 lg:h-80 animate-once mx-auto md:my-auto animate-duration-1000 animate-ease-in-out relative z-10 -right-4" alt="pokemon picture" src={getImage(pokemon)} />
					<Card className="max-w-sm mx-auto flex-1 overflow-hidden animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
						<Text className="font-semibold animate-fade-left animate-once animate-duration-700 animate-delay-500 animate-ease-in-out">
							#{pokemon.id}
						</Text>
						<Title className="font-bold text-4xl capitalize animate-fade-left animate-once animate-duration-1000 animate-delay-150 animate-ease-in-out">
							{pokemon.name}
						</Title>

						<div className="mt-2 animate-fade animate-once animate-duration-1000 animate-delay-200 animate-ease-in-out">
							<TypeChips pokemon={pokemon} />
						</div>

						<Text className="mt-1 min-w-0">{species.flavor_text_entries[1].flavor_text}</Text>

						<div className="animate-fade-up animate-once animate-duration-1500 animate-delay-500 animate-ease-in-out">
							<PokemonStats stats={pokemon.stats} />
						</div>
					</Card>
				</div>

				<EvolutionChain url={species.evolution_chain.url} />
			</main>
		)
}
