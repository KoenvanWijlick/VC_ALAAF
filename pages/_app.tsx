import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Head from "next/head";
import "@/styles/globals.css";
import WebLayout from "@/components/WebLayout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VC AL-AAF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="VC AL-AAF bouwt innovatieve carnavalswagens. Word sponsor en bouw mee." />
      </Head>
      <MantineProvider>
        <ThemeProvider>
          <ToastProvider>
            <WebLayout>
              <Component {...pageProps} />
            </WebLayout>
          </ToastProvider>
        </ThemeProvider>
      </MantineProvider>
    </>
  );
}
