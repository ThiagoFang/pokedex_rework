"use client"

import { Card } from "@/components";
import { cardStyles } from "@/components/Card";
import { PokeballButton } from "@/components/PokeballButton";
import { useGameStore } from "@/store/game";
import { useState } from "react";

interface Props {
  pokemon: string;
}

export const Input = ({ pokemon }: Props) => {
  const [value, setValue] = useState("");
  const { addScore, addRound, setShowPokemon } = useGameStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.length) return;

    if (value === pokemon) {
      setShowPokemon(true);
      addScore();

      setTimeout(() => {
        addRound();
        setShowPokemon(false);
        setValue("");
      }, 5000);
    } else {
      addRound();
      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cardStyles({ className: "flex gap-2 py-2 items-center w-max mx-auto" })}>
      <input
        className="mx-auto w-64 text-gray-700 dark:text-gray-200 p-4 border-none bg-transparent focus:outline-none text-xl sm:text-2xl font-bold"
        placeholder="Pokemon Name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <PokeballButton type="submit" />
    </form>
  )
}
