import Head from "next/head";

import { IdProvider } from "@radix-ui/react-id";

import { globalReset } from "../stitches.config";

function _App({ Component, pageProps }) {
  globalReset();

  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default _App;
