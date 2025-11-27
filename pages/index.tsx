import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import BuildProcess from "../components/BuildProcess/BuildProcess";
import Sponsors from "../components/Sponsors/Sponsors";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>VC AL-AAF - Carnavalsvereniging</title>
        <meta
          name="description"
          content="VC AL-AAF is een enthousiaste carnavalsvereniging uit Limburg. Bouw mee aan onze carnavalswagen 2026!"
        />
      </Head>

      <Hero />
      <About />
      <BuildProcess />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  );
}
