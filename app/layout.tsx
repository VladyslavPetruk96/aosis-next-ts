import Logo from "@/app/_components/Logo";
import { Navigation } from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

console.log(josefin);

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
				className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
			>
				<header>
					<Logo />
				</header>
				<Navigation />
				{children}
				<footer>Copyright by Oasis</footer>
			</body>
		</html>
	);
}
