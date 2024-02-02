import axios from "axios";

export const AxiosRequest = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
