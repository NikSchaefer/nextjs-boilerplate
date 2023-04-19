import "@styles/global.css";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>NextJS Boilerplate | Nik Schaefer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NextSeo
				title="Home"
				defaultTitle="Title"
				titleTemplate="%s | NextJS Boilerplate | Nik Schaefer"
				description="A NextJS boilerplate with TypeScript, ESLint, Prettier, TailwindCSS, and Google Analytics."
				canonical="https://nextjs-boilerplate.vercel.app/"
				openGraph={{
					url: "https://nextjs-boilerplate.vercel.app/",
					title: "NextJS Boilerplate | Nik Schaefer",
					description:
						"A NextJS boilerplate with TypeScript, ESLint, Prettier, TailwindCSS, and Google Analytics.",
					images: [],
					site_name: "NextJS Boilerplate | Nik Schaefer",
				}}
			/>

			<Component {...pageProps} />
		</>
	);
}
