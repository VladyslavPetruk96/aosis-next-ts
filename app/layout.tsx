import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Logo from "./components/Logo"
import { Navigation } from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] })

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
			<body className={inter.className}>
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
