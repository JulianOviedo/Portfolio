import Head from "next/head";
import { Roboto_Mono } from "@next/font/google";
import "../styles/globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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
  );
}
