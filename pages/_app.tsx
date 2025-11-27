// pages/_app.tsx
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import WebLayout from "../components/WebLayout";
import I18nClientProvider from "../components/I18nClientProvider";
import ThemeProvider from "../components/ThemeProvider";
import { theme } from "../theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nClientProvider>
      <ThemeProvider>
        <MantineProvider theme={theme} forceColorScheme="light">
          <Head>
            <title>VC AL-AAF</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/Logo.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <WebLayout>
            <Component {...pageProps} />
          </WebLayout>
        </MantineProvider>
      </ThemeProvider>
    </I18nClientProvider>
  );
}
