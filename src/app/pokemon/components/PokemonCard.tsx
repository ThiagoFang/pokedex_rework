import { getPokemon } from "@/utils/fetch/getPokemon";
import { getImage } from "@/utils/getImage";
import { PokemonCardLink } from "./PokemonCardLink";
import { Text, Title } from "@/components";
import { TypeChips } from "@/components/TypeChips";

interface Props {
  name: string;
}

export const PokemonCard = async ({ name }: Props) => {
  const pokemon = await getPokemon(name);

  if (pokemon)
    return (
      <PokemonCardLink name={pokemon.name}>
        <img className="h-24 -top-8 absolute pointer-events-none animate-fade-up animate-once animate-duration-500 animate-delay-300 animate-ease-in-out" draggable={false} alt="" src={getImage(pokemon)} />
        <Text className="font-bold">
          #{pokemon.id}
        </Text>
        <Title className="capitalize mt-1 mb-3 font-bold tracking-wide">
          {pokemon.name}
        </Title>
        <TypeChips pokemon={pokemon} />
      </PokemonCardLink>
    )
}
