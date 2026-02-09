"use client";

import React from "react";
import Link from "next/link";
import { Container, Paper, Title, Text, Button } from "@mantine/core";
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
          <div className={classes.cta}>
            <Button
              component={Link}
              href="/sponsors"
              radius="xl"
              variant="light"
              size="md"
              className={classes.ctaButton}
            >
              {t("sponsors.cta", "Allemaal op een rijtje")}
            </Button>
          </div>
          <SponsorMarquee />
        </Paper>
      </Container>
    </section>
  );
}
