import ProgressBar from "@/components/ProgressBar";
import { Pokemon } from "@/types/pokemon"

interface Props {
  stats: Pokemon["stats"];
}

export const PokemonStats = ({ stats }: Props) => {
  return (
    <div>
      {stats.map((item, index) => (
        <ProgressBar
          label={item.stat.name}
          percentage={item.base_stat}
        />
      ))}
    </div>
  )
}
