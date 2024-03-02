import { Pokemon } from "@/types/pokemon";
import { AxiosRequest } from "./axios";

export const getPokemon = async (pokemon: string) => {
  try {
    const response = await AxiosRequest.get(`pokemon/${pokemon}`);

    return response.data as Pokemon;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * 350) + 1;

  try {
    const response = await AxiosRequest.get(`pokemon/${randomNumber}`);

    return response.data as Pokemon;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonList = async (page: number) => {
  const params = {
    limit: 20,
    offset: (page - 1) * 20,
  };

  try {
    const response = await AxiosRequest.get(`pokemon`, { params });

    return response.data.results as {
      name: string;
      url: string;
    }[];
  } catch (error) {
    console.log(error);
  }
};
