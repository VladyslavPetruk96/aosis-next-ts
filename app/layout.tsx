import Logo from "@/app/_components/Logo"
import { Navigation } from "@/app/_components/Navigation"
import "@/app/_styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Oasis",
	description: "Booking app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-primary-950 text-primary-100 min-h-screen">
				<header>
					<Logo />
				</header>
				<Navigation />
				{children}
				<footer>Copyright by Oasis</footer>
			</body>
		</html>
	)
}
