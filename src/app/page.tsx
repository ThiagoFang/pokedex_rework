import { Card, Metric, Text } from "@/components";
import { cardStyles } from "@/components/Card";
import { PokeballButton } from "@/components/PokeballButton";
import { Pokeball } from "@/components/svg/Pokeball";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="mt-16">
				<Metric className="w-max mx-auto mb-4 text-3xl font-extrabold">Who is that pokemon?</Metric>
				<div className="flex mx-auto w-max" >
					<Image alt="pokemon picture" src="/rayquaza.png" width={450} height={350} />
					<div className="space-y-8 max-w-xs">
						<Card className="flex gap-2 items-center">
							<Metric>Rayquaza</Metric>
							<Text className="mt-1">#384</Text>
						</Card>
						<Card className="grid gap-4">
							<Text>
								It lives in the ozone layer far above the
								clouds and cannot be seen from the ground.
							</Text>

							{/* ATTACK BAR */}
							<div>
								<Text className="mb-1">Attack</Text>
								<div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
									<div className="bg-secondary h-4 w-1/2 rounded-full" />
								</div>
							</div>

							{/* HP BAR */}
							<div>
								<Text className="mb-1">HP</Text>
								<div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
									<div className="bg-secondary h-4 w-1/2 rounded-full" />
								</div>
							</div>

							{/* DEFENSE BAR */}
							<div>
								<Text className="mb-1">Defense</Text>
								<div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
									<div className="bg-secondary h-4 w-1/2 rounded-full" />
								</div>
							</div>

							{/* SP DEFENSE BAR */}
							<div>
								<Text className="mb-1">SP Defense</Text>
								<div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
									<div className="bg-secondary h-4 w-1/2 rounded-full" />
								</div>
							</div>

							{/* SP ATTACK BAR */}
							<div>
								<Text className="mb-1">SP Attack</Text>
								<div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
									<div className="bg-secondary h-4 w-1/2 rounded-full" />
								</div>
							</div>

							<Link href="/" className="text-sm max-w hover:underline text-gray-500 dark:text-gray-300 hover:text-secondary font-medium">See More</Link>
						</Card>
					</div>
				</div>
			</div>

			<label className={cardStyles({ className: "items-center flex max-w-lg mt-16 mx-auto gap-4 py-3" })}>
				<input className="bg-transparent p-2 text-gray-700 dark:text-gray-300 flex-1 appearance-none focus:outline-none" placeholder="Search for a pokemon..." />
				<PokeballButton />
			</label>
		</main>
	);
}
