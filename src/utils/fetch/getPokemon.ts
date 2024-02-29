import { Pokemon } from "@/types/pokemon";
import { AxiosRequest } from "./axios";

export const getPokemon = async (pokemon: string) => {
  try {
    const response = await AxiosRequest.get(`pokemon/${pokemon}`);

    return response.data as Pokemon;
  } catch (error) {
    throw new Error("Error fetching pokemon");
  }
};

export const getRandomPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * 350) + 1;

  try {
    const response = await AxiosRequest.get(`pokemon/${randomNumber}`);

    return response.data as Pokemon;
  } catch (error) {
    throw new Error("Error fetching random pokemon");
  }
};
