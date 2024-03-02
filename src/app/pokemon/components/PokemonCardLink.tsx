"use client"

import { useConfigsStore } from "@/store/configs";
import { cardStyles } from "@/components/Card";

import Link from "next/link";

interface Props {
  name: string;
  children: React.ReactNode;
}

export function PokemonCardLink({ name, children }: Props) {
  const { setIsLoading } = useConfigsStore();

  return (
    <Link href={`/pokemon/${name}`} onClick={() => setIsLoading(true)} draggable={false} className={cardStyles({ className: "flex flex-col select-none items-center pt-20 justify-center relative animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-in-out" })} >
      {children}
    </Link>
  )
}