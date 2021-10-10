import Head from "next/head";

import { IdProvider } from "@radix-ui/react-id";

import { globalReset } from "../stitches.config";

function _App({ Component, pageProps }) {
  globalReset();

  return (
    <IdProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Shopaged</title>
        <meta
          name="description"
          content="Shopping platform."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default _App;
