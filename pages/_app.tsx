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
        <title>josefnagy.cz</title>
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
