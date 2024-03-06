"use client";

import { Suspense } from "react";
import { GameArea } from "./components/GameArea";
import { Title, Text } from "@/components";
import { useGameStore } from "@/store/game";

function Play() {
  const { round } = useGameStore();

  return (
    <div className="max-w-7xl mt-6 sm:mt-16 mx-auto">
      <div className="text-center pb-4">
        <Title className="lg:text-3xl">Who is that Pokémon?</Title>
        <Text>Earn points by identifying the name of the Pokémon</Text>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <GameArea />
      </Suspense>
    </div>
  )
}

export default Play