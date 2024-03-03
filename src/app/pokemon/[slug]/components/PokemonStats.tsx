import ProgressBar from "@/components/ProgressBar";
import { Pokemon } from "@/types/pokemon"

interface Props {
  stats: Pokemon["stats"];
}

export const PokemonStats = ({ stats }: Props) => {
  return (
    <div className="mt-2 min-w-0 grid gap-3">
      {stats.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.stat.name}
          percentage={item.base_stat}
        />
      ))}
    </div>
  )
}
