import { Pokeball } from "./svg/Pokeball"

export const PokeballButton = () => {
  return (
    <button type="button" className="p-2 rounded-lg shadow-primary/50 shadow-md bg-primary transition-all hover:shadow-primary/80 active:opacity-80">
      <Pokeball className="fill-white" />
    </button>
  )
}
