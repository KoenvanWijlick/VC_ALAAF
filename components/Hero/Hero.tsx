"use client";

import React from "react";
import Link from "next/link";
import { Button, Group } from "@mantine/core";
import {
  IconBrandInstagram,
  IconMail,
  IconRocket,
  IconCalendar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="intro" className={styles.wrapper}>
      {/* Left – full-bleed carnival image */}
      <div className={styles.image} aria-hidden="true">
        <img
          src="/images/wagen_2025_1.png"
          alt="VC AL-AAF Carnival Float"
        />
      </div>

      {/* Right – content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          {t("hero.greeting", "Welkom bij")}{" "}
          <span className={styles.highlight}>VC AL-AAF</span>
        </h1>

        <p className={styles.subtitle}>
          {t(
            "hero.description",
            "Bouw mee aan onze carnavalswagen 2026 en word onderdeel van de feestelijkste traditie van Limburg.",
          )}
        </p>

        <Group className={styles.buttons} gap="sm">
          <Button
            className={styles.journeyBtn}
            variant="light"
            radius="xl"
            size="md"
            component="a"
            href="#sponsor"
            leftSection={<IconRocket size={18} />}
            style={{ textTransform: "none" }}
          >
            {t("hero.becomeSponsor", "Word sponsor")}
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            component="a"
            href="#about"
          >
            {t("hero.learnMore", "Lees meer")}
          </Button>
          <Button
            className={styles.projectsBtn}
            variant="outline"
            radius="xl"
            size="md"
            component={Link}
            href="/WagenPage"
            leftSection={<IconCalendar size={18} />}
          >
            {t("hero.viewWagens", "Onze Wagens")}
          </Button>
        </Group>

        <div className={styles.socials}>
          <a href="mailto:info@vc-alaaf.nl" aria-label="Email VC AL-AAF">
            <IconMail size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VC AL-AAF Instagram"
          >
            <IconBrandInstagram size={24} />
          </a>
        </div>
      </motion.div>

      {/* Down-arrow hint (desktop only) */}
      <motion.div
        className={styles.arrowWrap}
        initial={{ y: 0 }}
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span className={styles.arrowText}>
          {t("hero.scrollMore", "Scroll voor meer")}
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 6V30M18 30L8 20M18 30L28 20"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
