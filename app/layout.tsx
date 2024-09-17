import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Oasis",
		default: "Welcome | Oasis",
	},
	description: "Booking app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
			>
				<Header />

				<div className="flex-1 px-8 py-12">
					<main className="mx-auto max-w-7xl">{children}</main>
				</div>
			</body>
		</html>
	);
}
