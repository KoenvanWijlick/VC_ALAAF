import Image from "next/image";
import Link from "next/link";
import sponsorList from "../public/sponsors/sponsors.json";
import styles from "@/styles/HomePage.module.css";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sponsorInfo = [
  "Iedere bijdrage, groot of klein, gaat rechtstreeks naar hout, doek en verf.",
  "We sturen regelmatig foto updates zodat je mee kunt kijken met de bouw.",
  "Tijdens de optocht noemen we alle namen via onze speakers en op de wagen.",
];

export default function SponsorsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <Badge tone="neutral">Sponsoren</Badge>
        <h1>Dank aan alle bedrijven en families die ons steunen</h1>
        <p>Net als Kar van stal houden we het kleinschalig en dichtbij huis. Geen pakketten, alleen dankbaarheid.</p>
      </div>

      <div className={styles.aboutGrid}>
        {sponsorInfo.map((text) => (
          <Card key={text} className={styles.featureCard}>
            <p>{text}</p>
          </Card>
        ))}
      </div>

      <div className={styles.sectionHeader} style={{ marginTop: "var(--space-2xl)" }}>
        <h2>Overzicht logo&apos;s</h2>
      </div>

      <div className={styles.galleryGrid} aria-label="Logos van sponsoren">
        {sponsorList.map((logo) => (
          <figure key={logo} className={styles.galleryItem}>
            <Image src={`/sponsors/${logo}`} alt={`Sponsor ${logo}`} fill sizes="180px" style={{ objectFit: "contain" }} />
          </figure>
        ))}
      </div>

      <p style={{ marginTop: "var(--space-lg)", textAlign: "center" }}>
        Wil je meehelpen als sponsor? Kom eens langs tijdens een bouwavond of stuur een bericht naar{" "}
        <Link href="mailto:info@vc-alaaf.nl">info@vc-alaaf.nl</Link>.
      </p>
    </section>
  );
}
