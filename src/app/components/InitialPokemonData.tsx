import { Card, Metric } from "@/components"
import { Text } from "@/components"
import { getRandomPokemon } from "@/utils/fetch/getPokemon"
import { getImage } from "@/utils/getImage"
import { getSpecies } from "@/utils/fetch/getSpecies"
import { SearchLink } from "./SearchLink"

import ProgressBar from "@/components/ProgressBar"


export default async function InitialPokemonData() {
  const pokemon = await getRandomPokemon();
  const species = await getSpecies(pokemon?.name ?? "");

  if (pokemon && species)
    return (
      <div className="flex align-items-center justify-center mx-auto w-max" >
        <img className="animate-fade-up h-80 animate-once my-auto animate-duration-1000 animate-ease-in-out relative z-10 -right-2" alt="pokemon picture" src={getImage(pokemon)} />
        <div className="space-y-8 max-w-xs">
          <Card className="flex gap-2 items-center animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-100">
            <Metric className="capitalize">{pokemon.name}</Metric>
            <Text className="mt-1">#{pokemon.id}</Text>
          </Card>
          <Card className="grid gap-4 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-150">
            <Text>
              {species.flavor_text_entries[1].flavor_text}
            </Text>

            {pokemon.stats.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.stat.name}
                percentage={item.base_stat}
              />
            ))}

            <SearchLink name={pokemon.name} />
          </Card>
        </div>
      </div>
    )
}
