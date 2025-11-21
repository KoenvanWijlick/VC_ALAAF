import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link rel="icon" href="/images/Logo.png" />
        <meta name="theme-color" content="#0a1f44" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VC AL-AAF" />
        <meta property="og:description" content="Bouw mee aan onze innovatieve carnavalswagens." />
        <meta property="og:image" content="/images/og-placeholder.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="analytics-placeholder" aria-hidden="true" />
      </body>
    </Html>
  );
}
