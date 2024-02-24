import z from "zod";

interface Species {
  name: string;
  url: string;
}

interface EvolvesToArr {
  is_baby: boolean;
  species: Species;
  evolves_to: EvolvesToArr[];
}

export interface EvolutionChain {
  baby_trigger_item: string;
  chain: {
    evolves_to: EvolvesToArr[];
    is_baby: boolean;
    species: Species;
  };
  id: number;
}
