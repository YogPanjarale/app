import 'tailwindcss/tailwind.css'
import "../styles/main.css"
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Nutritive Value Calculator for finding nutrional values of food items" />
        <meta name="keywords" content="Nutritive Value Calculatorr" />
        <title>Nutritive Value Calculator</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/images/icons/icon-72x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
