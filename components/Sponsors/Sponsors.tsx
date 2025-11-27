"use client";

import React from "react";
import { Container, Paper, Title, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import SponsorMarquee from "./SponsorMarquee";
import classes from "./Sponsors.module.css";

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <section id="sponsors" className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Paper shadow="xs" className={classes.paper}>
          <Title order={2} className={classes.heading}>
            {t("sponsors.title", "Onze Sponsoren!")}
          </Title>
          <Text className={classes.text}>
            {t(
              "sponsors.subtitle",
              "Een shout-out naar al onze geweldige sponsoren die ons helpen deze droom waar te maken."
            )}
          </Text>
          <SponsorMarquee />
        </Paper>
      </Container>
    </section>
  );
}
