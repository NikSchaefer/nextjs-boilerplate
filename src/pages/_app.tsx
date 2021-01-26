import "@styles/global.css";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line import/no-default-export
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

			<Header />

			<Component {...pageProps} />

			<Footer />
		</>
	);
}
