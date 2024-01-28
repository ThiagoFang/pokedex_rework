interface Props {
	params: {
		slug: string;
	}
}

export default function PokemonsPage({ params }: Props) {
	return <div>the pokemon is: {params.slug}</div>;
}
