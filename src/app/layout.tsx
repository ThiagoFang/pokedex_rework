import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScreenLoading } from "@/components/ui/ScreenLoading";

import Header from "@/components/ui/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pokedex | Thiago Fang ",
	description: "Pokemon list with details using pokeapi",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-slate-100 p-0 m-0 dark:bg-dark-background">
			<body className={`${inter.className} min-h-dvh`}>
				<ScreenLoading />


				<Header />
				<div className="p-4 h-full">{children}</div>
			</body>
		</html>
	)
}
