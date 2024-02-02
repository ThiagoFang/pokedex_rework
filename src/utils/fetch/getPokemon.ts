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
