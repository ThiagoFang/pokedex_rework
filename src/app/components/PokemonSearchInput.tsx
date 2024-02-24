"use client"

import { cardStyles } from "@/components/Card";
import { PokeballButton } from "@/components/PokeballButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PokemonSearchInput() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleNavigate = () => {
    if (!value.length) return

    router.push(`/pokemon/${value.trim()}`)
  }

  return (
    <label className={cardStyles({ className: "items-center flex max-w-lg mt-16 mx-auto gap-4 py-3 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" })}>
      <input value={value} onChange={(e) => setValue(e.target.value)} className="bg-transparent p-2 text-gray-700 dark:text-gray-300 flex-1 appearance-none focus:outline-none" placeholder="Search for a pokemon..." />
      <PokeballButton onClick={handleNavigate} />
    </label>
  )
}