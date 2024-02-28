import { Card, Metric, Text } from "@/components";

import Image from "next/image";
import Link from "next/link";
import PokemonSearchInput from "./components/PokemonSearchInput";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
	return (
		<main>
			<div className="mt-16">
				<Metric className="w-max mx-auto mb-4 text-3xl font-extrabold">Who is that pokemon?</Metric>
				<div className="flex mx-auto w-max" >
					<Image className="animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" alt="pokemon picture" src="/rayquaza.png" width={450} height={350} />
					<div className="space-y-8 max-w-xs">
						<Card className="flex gap-2 items-center animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-100">
							<Metric>Rayquaza</Metric>
							<Text className="mt-1">#384</Text>
						</Card>
						<Card className="grid gap-4 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
							<Text>
								It lives in the ozone layer far above the
								clouds and cannot be seen from the ground.
							</Text>

							<ProgressBar percentage={85} label="Attack" />

							<ProgressBar percentage={55} label="HP" />

							<ProgressBar percentage={65} label="Defense" />

							<ProgressBar percentage={45} label="SP Defense" />

							<ProgressBar percentage={80} label="SP Attack" />

							<Link href="/" className="text-sm max-w hover:underline text-gray-500 dark:text-gray-300 hover:text-secondary font-medium">See More</Link>
						</Card>
					</div>
				</div>
			</div>

			<PokemonSearchInput />
		</main>
	);
}
