"use client"

import { usePathname } from "next/navigation";
import { cardStyles } from "../../Card"
import Link from "next/link";
import Title from "@/components/Title";

import * as Lucide from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={cardStyles({ className: "w-max m-auto select-none translate-y-4" })}>
      <ul className="flex items-center">
        <li>
          <Link href="/" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Home size={18} className="stroke-gray-700 dark:stroke-white" />
            <Title>Home</Title>
          </Link>
        </li>

        <li>
          <Link href={{
            pathname: "/pokemon",
            query: { page: 1 }
          }} className="flex items-center gap-1 py-2 px-4">
            <Lucide.PawPrint size={18} className="stroke-gray-700 dark:stroke-white" />
            <Title>Pokedex</Title>
          </Link>
        </li>

        <li>
          <Link href="" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Gamepad2 size={18} className="stroke-gray-700 dark:stroke-white" />
            <Title>Play</Title>
          </Link>
        </li>


        <li>
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer" className="flex items-center gap-1 py-2 px-4">
            <Lucide.ExternalLink size={18} className="stroke-gray-700 dark:stroke-white" />
            <Title>PokeApi</Title>
          </a>
        </li>
      </ul>
    </nav>
  )
}