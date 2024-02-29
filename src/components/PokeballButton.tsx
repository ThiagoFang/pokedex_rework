import { ComponentProps } from "react"
import { Pokeball } from "./svg/Pokeball"

type Props = ComponentProps<"button">;

export const PokeballButton = (props: Props) => {
  return (
    <button type="button" className="p-2 rounded-lg disabled:grayscale disabled:opacity-70 shadow-primary/25 shadow-md bg-primary transition-all hover:shadow-primary/50 active:opacity-80" {...props}>
      <Pokeball className="fill-white dark:fill-slate-100" />
    </button>
  )
}
