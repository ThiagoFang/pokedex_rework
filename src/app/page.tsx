import { Metric } from "@/components";

import PokemonSearchInput from "./components/PokemonSearchInput";
import InitialPokemonData from "./components/InitialPokemonData";

export default function Home() {
	return (
		<main>
			<div className="mt-16">
				<Metric className="w-max mx-auto mb-4 text-3xl font-extrabold">Who is that pokemon?</Metric>
				<InitialPokemonData />
			</div>

			<PokemonSearchInput />
		</main>
	);
}
