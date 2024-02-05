import React from 'react'
import { Text } from '.';

interface Props {
  percentage?: number;
  label: string;
}

export default function ProgressBar({ percentage = 0, label }: Props) {
  const progressBarWidth = `${((percentage * 100) / 200)}%`;

  return (
    <div>
      <div className='flex items-center justify-between'>
        <Text className="mb-1">{labelMapping[label]}</Text>
        <Text className='text-gray-400'>{percentage}</Text>
      </div>

      <div className="bg-secondary/10 h-2 rounded-full overflow-hidden">
        <div className={`bg-secondary h-2 rounded-full`} style={{ width: progressBarWidth }} />
      </div>
    </div>
  )
}

const labelMapping: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Special Attack",
  "special-defense": "Special Defense",
  speed: "Speed",
}