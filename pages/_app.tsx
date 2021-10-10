import Head from "next/head";

import { IdProvider } from "@radix-ui/react-id";
// import "./../styles/reset.css";
// import "./../styles/utilities.css";
// import "./../styles/components.css";
// import "./../styles/custom.css";
import { globalReset } from "../stitches.config";

function _App({ Component, pageProps }) {
  globalReset();

  return (
    <IdProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </IdProvider>
  );
}

export default _App;
