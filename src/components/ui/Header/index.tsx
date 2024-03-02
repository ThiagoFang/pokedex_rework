"use client"

import { usePathname } from "next/navigation";
import { cardStyles } from "../../Card"
import Link from "next/link";
import Title from "@/components/Title";

import * as Lucide from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={cardStyles({ className: "w-max max-sm:fixed z-50 bottom-8 left-1/2 max-sm:-translate-x-1/2 m-auto max-sm:p-2 select-none translate-y-4" })}>
      <ul className="flex items-center">
        <li>
          <Link href="/" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Home className="stroke-gray-700 size-6 sm:size-4.5 dark:stroke-white" />
            <Title className="max-sm:hidden">Home</Title>
          </Link>
        </li>

        <li>
          <Link href={{
            pathname: "/pokemon",
            query: { page: 1 }
          }} className="flex items-center gap-1 py-2 px-4">
            <Lucide.PawPrint className="stroke-gray-700 size-6 sm:size-4.5 dark:stroke-white" />
            <Title className="max-sm:hidden">Pokedex</Title>
          </Link>
        </li>

        <li>
          <Link href="" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Gamepad2 className="stroke-gray-700 size-6 sm:size-4.5 dark:stroke-white" />
            <Title className="max-sm:hidden">Play</Title>
          </Link>
        </li>


        <li>
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer" className="flex items-center gap-1 py-2 px-4">
            <Lucide.ExternalLink className="stroke-gray-700 size-6 sm:size-4.5 dark:stroke-white" />
            <Title className="max-sm:hidden">PokeApi</Title>
          </a>
        </li>
      </ul>
    </nav>
  )
}