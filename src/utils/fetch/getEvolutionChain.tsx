import { EvolutionChain } from "@/types/evolutionChain";
import axios from "axios";

export const getEvolutionsByUrl = async (url: string) => {
  try {
    const response = await axios.get(url);

    return response.data as EvolutionChain;
  } catch (error) {
    console.log(error);
  }
};
