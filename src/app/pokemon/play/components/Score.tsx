"use client"

import { Metric } from '@/components'
import { useGameStore } from '@/store/game';

export const Score = () => {
  const { score } = useGameStore();

  return (
    <Metric className="text-center mt-4">Score: {score}</Metric>
  )
}
