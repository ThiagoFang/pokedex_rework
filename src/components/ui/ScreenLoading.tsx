"use client"

import { useConfigsStore } from "@/store/configs";
import { Pokeball } from "../svg/Pokeball"

export const ScreenLoading = () => {
  const { isLoading } = useConfigsStore();

  if (!isLoading) return;
  return (
    <div className="flex items-center justify-center inset-0 bg-secondary z-50 fixed animate-fade animate-once animate-duration-500 animate-ease-linear">
      <div className="animate-fade-up animate-once animate-duration-1000 animate-ease-linear">
        <Pokeball className="fill-white dark:fill-slate-100 size-16 animate-spin animate-infinite animate-duration-[1500ms] animate-ease-in-out" />
        <h1 className="font-bold text-white text-lg mt-2">Searching for pokemon...</h1>
      </div>
    </div>
  )
}
