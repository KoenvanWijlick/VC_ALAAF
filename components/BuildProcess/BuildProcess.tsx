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

  const mediaItems = [
    { type: "video", src: "/images/wagen2026/video1.mp4" },
    { type: "video", src: "/images/wagen2026/video2.mp4" },
    { type: "video", src: "/images/wagen2026/video3.mp4" },
    { type: "video", src: "/images/wagen2026/video4.mp4" },
  ];

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
          {mediaItems.map((item, i) => (
            <Transition
              key={`media-${i}`}
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
                  <Box className={classes.imageBox} style={{ paddingBottom: 0, height: "400px" }}>
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        muted
                        loop
                        playsInline
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                        className={classes.image}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={`Bouwproces stap ${i + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className={classes.image}
                      />
                    )}
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
