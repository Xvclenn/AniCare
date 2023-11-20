import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "AniCare",
	description: "Made By Chikuso <3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link href="/dist/output.css" rel="stylesheet"></link>
			</head>
			<body className={roboto.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
