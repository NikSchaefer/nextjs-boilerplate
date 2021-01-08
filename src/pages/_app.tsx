import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "../components/footer";
import Header from "../components/header";

// eslint-disable-next-line import/no-default-export
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div>
			<Head>
				{/* Meta Data on every page */}
				<title>New App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
}
