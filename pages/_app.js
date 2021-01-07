import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/footer";

// has Header acn Footer on every page

export default function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				{/* Meta Data on every page */}
				<title>New App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header></Header>

			<Component {...pageProps} />

			<Footer></Footer>
		</div>
	);
}
