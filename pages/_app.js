import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>New App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Header</h1>
      </header>

      <Component {...pageProps} />
      <footer>

      </footer>

    </div>
  )
}