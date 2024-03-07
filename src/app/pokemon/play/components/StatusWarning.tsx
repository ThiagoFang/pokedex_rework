"use client"

import { Title } from '@/components'
import { useGameStore } from '@/store/game';


interface Props {
  name: string;
}

export const StatusWarning = ({ name }: Props) => {
  const { status } = useGameStore();

  if (!status) return;
  return (
    <Title
      data-status={status}
      className='text-center data-[status=won]:text-emerald-600 data-[status=lost]:text-red-600'
    >
      {status === "won" ? "That's right." : `No, that's wrong, is ${name}`}
    </Title>
  )
}
