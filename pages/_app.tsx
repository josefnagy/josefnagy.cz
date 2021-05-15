import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>josefnagy.cz</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
