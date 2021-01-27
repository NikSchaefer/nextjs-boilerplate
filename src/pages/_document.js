import { GA_TRACKING_ID } from "@src/config.ts";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='en-us'>
				<Head>
					<title>NextJS Boilerplate | Nik Schaefer</title>
					<meta
						name="description"
						content="Boilerplate built to scale containing Typescript + NextJS + Google Analytics + ESLint + Jest + Styled Components + Icons"
					/>

					<meta
						itemProp="name"
						content="NextJS Boilerplate | Nik Schaefer"
					/>
					<meta
						itemProp="description"
						content="Boilerplate built to scale containing Typescript + NextJS + Google Analytics + ESLint + Jest + Styled Components + Icons"
					/>
					<meta itemProp="image" content="/logo.png" />

					<meta
						property="og:url"
						content="https://boilerplate.nikschaefer.tech"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content="NextJS Boilerplate | Nik Schaefer"
					/>
					<meta
						property="og:description"
						content="Boilerplate built to scale containing Typescript + NextJS + Google Analytics + ESLint + Jest + Styled Components + Icons"
					/>
					<meta property="og:image" content="/logo.png" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content="NextJS Boilerplate | Nik Schaefer"
					/>
					<meta
						name="twitter:description"
						content="Boilerplate built to scale containing Typescript + NextJS + Google Analytics + ESLint + Jest + Styled Components + Icons"
					/>
					<meta name="twitter:image" content="/logo.png" />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
