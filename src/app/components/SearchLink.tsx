"use client"

import { useConfigsStore } from "@/store/configs";
import Link from "next/link";

interface Props {
  name: string;
}

export const SearchLink = ({ name }: Props) => {
  const { setIsLoading } = useConfigsStore();

  return (
    <Link href={`/pokemon/${name}`} onClick={() => setIsLoading(true)} className="text-sm max-w hover:underline text-gray-500 dark:text-gray-300 hover:text-secondary font-medium">See More</Link>
  )
}
