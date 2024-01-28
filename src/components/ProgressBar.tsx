import React from 'react'
import { Text } from '.';

interface Props {
  percentage?: number;
  label?: string;
}

export default function ProgressBar({ percentage, label }: Props) {
  const progressBarWidth = `${percentage}%`;

  return (
    <div>
      {!!label &&
        <Text className="mb-1">{label}</Text>
      }

      <div className="bg-secondary/10 h-4 rounded-full overflow-hidden">
        <div className={`bg-secondary h-4 rounded-full`} style={{ width: progressBarWidth }} />
      </div>
    </div>
  )
}
