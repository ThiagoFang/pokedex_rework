"use client"

import { usePathname } from "next/navigation";
import { cardStyles } from "../../Card"
import Link from "next/link";
import Title from "@/components/Title";

import * as Lucide from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={cardStyles({ className: "w-max m-auto mt-4 select-none" })}>
      <ul className="flex items-center">
        <li>
          <Link href="/" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Home size={20} className="stroke-gray-700 dark:stroke-white" />
            <Title>Home</Title>
          </Link>
        </li>

        <li>
          <Link href="/pokemon" className="flex items-center gap-1 py-2 px-4">
            <Lucide.PawPrint size={20} className="stroke-gray-700 dark:stroke-white" />
            <Title>Pokedex</Title>
          </Link>
        </li>

        <li>
          <Link href="" className="flex items-center gap-1 py-2 px-4">
            <Lucide.Gamepad2 size={20} className="stroke-gray-700 dark:stroke-white" />
            <Title>Play</Title>
          </Link>
        </li>
      </ul>
    </nav>
  )
}