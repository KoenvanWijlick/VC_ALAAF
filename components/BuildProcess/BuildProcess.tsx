"use client";

import React from "react";
import Image from "next/image";
import { Card, SimpleGrid, Title, Container, Box } from "@mantine/core";
import { Transition } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./BuildProcess.module.css";

export default function BuildProcess() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const images = ["1", "2", "3", "4"];

  return (
    <section id="build-process" className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Title order={2} className={classes.heading}>
          {t("buildProcess.title", "Het Bouwproces")}
        </Title>
        <p className={classes.subtitle}>
          {t(
            "buildProcess.subtitle",
            "Van eerste schets tot finale creatie - bekijk onze wagen in ontwikkeling"
          )}
        </p>

        <SimpleGrid cols={isMobile ? 1 : 2} spacing="md" className={classes.grid}>
          {images.map((n, i) => (
            <Transition
              key={n}
              mounted={true}
              transition="fade"
              duration={300 + 100 * i}
            >
              {(transitionStyles) => (
                <Card
                  shadow="sm"
                  p={0}
                  className={classes.card}
                  style={transitionStyles}
                >
                  <Box className={classes.imageBox}>
                    <Image
                      src={`/images/wagen_2025_${n}.png`}
                      alt={`Bouwproces stap ${n}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className={classes.image}
                    />
                  </Box>
                </Card>
              )}
            </Transition>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
