import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/layout/layout'
import Cursor from '../components/ui/cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Josef Nagy - josefnagy.cz</title>
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
