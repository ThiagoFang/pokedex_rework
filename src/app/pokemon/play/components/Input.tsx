"use client"

import { cardStyles } from "@/components/Card";
import { PokeballButton } from "@/components/PokeballButton";
import { useGameStore } from "@/store/game";
import { useState } from "react";

interface Props {
  pokemon: string;
}

export const Input = ({ pokemon }: Props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { addScore, addRound, setShowPokemon, setStatus, clearStatus } = useGameStore();

  const resetGame = () => {
    setTimeout(() => {
      addRound();
      setShowPokemon(false);
      setValue("");
      clearStatus();
      setLoading(false);
    }, 5000);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.length || loading) return;

    setLoading(true);
    setShowPokemon(true);

    if (value === pokemon) {
      setStatus("won");
      addScore();

      resetGame();
    }

    setStatus("lost");
    resetGame();
  }

  return (
    <form onSubmit={handleSubmit} className={cardStyles({ className: "flex gap-2 py-2 items-center w-max mx-auto" })}>
      <input
        className="mx-auto w-44 sm:w-64 disabled:opacity-50 text-gray-700 dark:text-gray-200 p-2 sm:p-4 border-none bg-transparent focus:outline-none text-lg sm:text-2xl font-bold"
        placeholder="Pokemon Name..."
        value={value}
        disabled={loading}
        onChange={(e) => setValue(e.target.value)}
      />
      <PokeballButton type="submit" disabled={loading} />
    </form>
  )
}
