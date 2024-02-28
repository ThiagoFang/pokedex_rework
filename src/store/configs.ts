import { create } from "zustand";

type ConfigsStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useConfigsStore = create<ConfigsStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
