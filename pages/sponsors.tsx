"use client";

import Head from "next/head";
import { useTranslation } from "react-i18next";
import SponsorsPage from "../components/Sponsors/SponsorsPage";
import Footer from "../components/Footer/Footer";

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("sponsors.pageTitle", "Sponsoren - VC AL-AAF")}</title>
        <meta
          name="description"
          content="Bekijk alle sponsoren van VC AL-AAF in een overzichtelijke grid."
        />
      </Head>
      <SponsorsPage />
      <Footer />
    </>
  );
}
