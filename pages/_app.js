import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import { useEffect } from 'react'
import '../styles/globals.css'

const font = Roboto_Mono({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    )
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return () => {
      if (threeScript) {
        threeScript.remove()
      }
    }
  }, [])
  return (
    <>
      <Head>
        <title>Julian Oviedo Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
