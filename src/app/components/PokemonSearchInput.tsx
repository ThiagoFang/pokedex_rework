"use client"

import { cardStyles } from "@/components/Card";
import { PokeballButton } from "@/components/PokeballButton";
import { useConfigsStore } from "@/store/configs";
import { sleep } from "@/utils/sleep";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PokemonSearchInput() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const { isLoading, setIsLoading } = useConfigsStore();

  const handleSubmit = async (submitEvent: React.FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();

    if (!value.length) return;

    setIsLoading(true);

    await sleep(500)

    const normalizedValue = value.trim().toLowerCase();
    router.push(`/pokemon/${normalizedValue}`)
  }

  return (
    <form onSubmit={handleSubmit} className={cardStyles({ className: "items-center flex max-w-lg my-8 sm:mt-16 mx-auto gap-4 py-3 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out" })}>
      <input value={value} onChange={(e) => setValue(e.target.value)} className="min-w-0 bg-transparent p-2 text-gray-700 dark:text-gray-300 flex-1 appearance-none focus:outline-none" placeholder="Search for a pokemon..." />
      <PokeballButton disabled={isLoading || !value.length} type="submit" />
    </form>
  )
}