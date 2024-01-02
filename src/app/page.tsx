import Card from "@/components/Card";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Metric from "@/components/Metric";

export default function Home() {
	return (
		<main>
			<div>Teste</div>

			<Card>
				<Metric>Teste</Metric>
				<Title>Título do Card</Title>
				<Subtitle>Subtitulo muito bonito</Subtitle>
				<Text>Texto que vai dentro da box muito grande e bonito</Text>
			</Card>
		</main>
	);
}
