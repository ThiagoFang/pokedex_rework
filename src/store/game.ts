import { create } from "zustand";

type GameStore = {
  score: number;
  addScore: () => void;
  round: number;
  addRound: () => void;
  showPokemon: boolean;
  setShowPokemon: (showPokemon: boolean) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  addScore: () => set((state) => ({ score: state.score + 1 })),
  round: 0,
  addRound: () => set((state) => ({ round: state.round + 1 })),
  showPokemon: false,
  setShowPokemon: (showPokemon: boolean) => set({ showPokemon }),
}));
