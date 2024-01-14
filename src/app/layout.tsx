import { cn } from "@lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import Containers from "./_content/containers";
import AnalyticScripts from "./_content/analytics";
// import { ANDROID_APP_URL, IOS_APP_URL } from "config";

// Uncomment and fill out all metadata fields
export const metadata: Metadata = {
	// title: {
	// 	template: "%s — App",
	// 	default: "App",
	// },
	// description:
	// 	"Description",
	// category: "software",
	// metadataBase: new URL(""),
	// openGraph: {
	// 	type: "website",
	// 	locale: "en",
	// 	url: "",
	// 	siteName: "",
	// 	title: "",
	// 	description: "",
	// 	images: [
	// 		{
	// 			url: "/logo.svg",
	// 			width: 400,
	// 			height: 400,
	// 			alt: "",
	// 		},
	// 	],
	// },
	// twitter: {
	// 	creator: "@",
	// 	site: "",
	// 	card: "",
	// 	description: "",
	// 	images: [""],
	// },
	// creator: "",
	// colorScheme: "light",
	// themeColor: "#ffb400",
	// publisher: "",
	// keywords: [],
	// referrer: "no-referrer-when-downgrade",
	// applicationName: "",
	// icons: {
	// 	icon: "/icons/favicon.ico",
	// 	apple: "/icons/apple-touch-icon.png",
	// 	shortcut: "/icons/favicon.ico",
	// },
	// manifest: "/site.webmanifest",
	// viewport: {
	// 	width: "device-width",
	// 	initialScale: 1,
	// 	maximumScale: 1,
	// 	userScalable: false,
	// },
	// appleWebApp: {
	// 	title: "",
	// 	statusBarStyle: "black-translucent",
	// 	capable: true,
	// 	startupImage: ["./icons/apple-touch-icon.png"],
	// },
	// appLinks: {
	// 	ios: {
	// 		url: IOS_APP_URL,
	// 		app_store_id: "",
	// 		app_name: "",
	// 	},
	// 	android: {
	// 		url: ANDROID_APP_URL,
	// 		package: "",
	// 		app_name: "",
	// 	},
	// 	web: {
	// 		url: "",
	// 		should_fallback: true,
	// 	},
	// },
	// other: {
	// 	handheldFriendly: "true",
	// },
};

const inter = Inter({
	variable: "--font-inter",
	display: "swap",
	subsets: ["latin", "latin-ext"],
	adjustFontFallback: true,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn(
				"h-screen w-screen text-mid-gray-dark",
				inter.className
			)}
		>
			<body className="h-full w-full">
				<Containers />
				{children}
			</body>
			<AnalyticScripts />
		</html>
	);
}
