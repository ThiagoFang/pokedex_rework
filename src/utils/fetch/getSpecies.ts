import { AxiosRequest } from "./axios";
import { Species } from "@/types/Species";

export const getSpecies = async (pokemon: string) => {
  try {
    const response = await AxiosRequest.get(`pokemon-species/${pokemon}`);

    return response.data as Species;
  } catch (error) {
    console.log(error);
  }
};
