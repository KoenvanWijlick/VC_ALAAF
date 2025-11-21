import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/HomePage.module.css";
import SponsorMarquee from "@/components/Sponsors/SponsorMarquee";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heritage = [
  {
    title: "Ambacht",
    body: "We lassen, schilderen en timmeren in ons eigen hok in Blerick. Alles gebeurt door vrijwilligers.",
  },
  {
    title: "Samen",
    body: "Jong en oud werken naast elkaar. Iedere bouwavond wordt afgesloten met koffie en vlaai.",
  },
  {
    title: "Traditie",
    body: "Sinds 2009 rijden we elk jaar mee tijdens de grote optocht. We bouwen voort op een rijke historie.",
  },
];

const diary = [
  { title: "Bouwavonden", detail: "Dinsdag en donderdag, 19:00 - 22:00" },
  { title: "Schilderweekend", detail: "Laatste weekend van januari" },
  { title: "Optocht", detail: "Carnavalszondag in Venlo" },
];

const wagenMoments = [
  { year: "2025", theme: "Kermis", image: "/images/Wagen2025.jpeg" },
  { year: "2024", theme: "Bob de bouwer", image: "/images/Wagen2024.jpeg" },
  { year: "2023", theme: "Skihut", image: "/images/Wagen2023.jpeg" },
];

const galleryImages = ["wagen_2025_1.png", "wagen_2025_2.png", "wagen_2025_3.png", "wagen_2025_4.png"];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>VC AL-AAF</span>
            <h1 className={styles.heroTitle}>Vrijwilligers die samen wagens bouwen voor Venlo</h1>
            <p className={styles.heroSubtitle}>
              Geen commercie, maar een hechte vriendengroep die hout, staal en verf omtovert tot verhalen voor de
              vastelaovend.
            </p>
            <div className={styles.heroActions}>
              <Button asChild>
                <Link href="/WagenPage">Bekijk wagens</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/sponsoren">Zie onze sponsoren</Link>
              </Button>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <figure>
              <Image src="/images/Wagen2025.jpeg" alt="Wagen 2025" width={640} height={420} className={styles.heroImage} />
              <figcaption className={styles.heroLegend}>2025 · Kermis</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge tone="neutral">Wie we zijn</Badge>
          <h2>Rustige club met liefde voor hout en staal</h2>
          <p>We bouwen naar voorbeeld van groepen zoals Kar van stal: no-nonsense, warm en ambachtelijk.</p>
        </div>
        <div className={styles.aboutGrid}>
          {heritage.map((item) => (
            <Card key={item.title} className={styles.featureCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge tone="neutral">In het hok</Badge>
          <h2>Bouwmomenten</h2>
        </div>
        <div className={styles.diaryGrid}>
          {diary.map((entry) => (
            <Card key={entry.title} className={styles.diaryCard}>
              <strong>{entry.title}</strong>
              <p>{entry.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge tone="neutral">Wagens</Badge>
          <h2>Een greep uit de afgelopen jaren</h2>
        </div>
        <div className={styles.grid}>
          {wagenMoments.map((wagen) => (
            <Card key={wagen.year} className={styles.featureCard} interactive>
              <Image src={wagen.image} alt={`${wagen.theme}`} width={480} height={320} className={styles.wagenImage} />
              <div>
                <strong>{wagen.year}</strong>
                <p>{wagen.theme}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge tone="neutral">Atelier</Badge>
          <h2>Gezichten achter de wagen</h2>
          <p>Een paar beelden uit de werkplaats. Alles draait om plezier en geduld.</p>
        </div>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img) => (
            <figure key={img} className={styles.galleryItem}>
              <Image src={`/images/${img}`} alt={img} fill sizes="260px" />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge tone="neutral">Sponsoren</Badge>
          <h2>Iedere bijdrage blijft zichtbaar</h2>
          <p>Lokale bedrijven zorgen dat we materialen kunnen kopen. Hieronder een deel van hun logo's.</p>
        </div>
        <SponsorMarquee />
        <div className={styles.heroActions} style={{ justifyContent: "center", marginTop: "var(--space-lg)" }}>
          <Button asChild>
            <Link href="/sponsoren">Volledige lijst</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
