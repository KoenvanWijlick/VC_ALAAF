"use client";

import React from "react";
import Image from "next/image";
import { Container, Paper, Title, Text, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import sponsorList from "../../public/sponsors/sponsors.json";
import classes from "./SponsorsPage.module.css";

export default function SponsorsPage() {
  const { t } = useTranslation();

  return (
    <section className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Paper shadow="md" className={classes.hero}>
          <Title order={1} className={classes.heading}>
            {t("sponsors.pageHeading", "Onze Sponsoren")}
          </Title>
          <Text className={classes.intro}>
            {t(
              "sponsors.pageIntro",
              "Dankjewel aan alle sponsoren die onze carnavalswagen mogelijk maken. Bekijk hieronder alle sponsoren.",
            )}
          </Text>
        </Paper>

        <div className={classes.grid} aria-label="Sponsor logos">
          {sponsorList.map((file) => (
            <Box key={file} className={classes.card}>
              <div className={classes.logoFrame}>
                <Image
                  src={`/sponsors/${file}`}
                  alt={`${file.replace(/\.[^/.]+$/, "")} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={classes.logo}
                />
              </div>
            </Box>
          ))}
        </div>
      </Container>
    </section>
  );
}
