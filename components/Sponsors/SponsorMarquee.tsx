"use client";

import { useMemo } from "react";
import Image from "next/image";
import sponsorList from "../../public/sponsors/sponsors.json";
import styles from "./SponsorMarquee.module.css";

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

export default function SponsorMarquee() {
  const logos = useMemo(() => shuffle(sponsorList).map((file) => `/sponsors/${file}`), []);
  const items = [...logos, ...logos];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack} aria-label="Sponsor logos in een lopende band">
        {items.map((src, idx) => (
          <figure key={`${src}-${idx}`} className={styles.marqueeItem}>
            <Image src={src} alt={`Sponsor ${idx + 1}`} fill sizes="260px" style={{ objectFit: "contain" }} />
          </figure>
        ))}
      </div>
    </div>
  );
}
