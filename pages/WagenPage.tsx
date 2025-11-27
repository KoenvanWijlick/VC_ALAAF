"use client";

import { useState } from "react";
import Head from "next/head";
import "@mantine/carousel/styles.css";
import Image from "next/image";
import {
  Container,
  Badge,
  Group,
  Paper,
  Text,
  ActionIcon,
  Modal,
  Box,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  IconPhoto,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer/Footer";
import classes from "../styles/WagenEarlier.module.css";

type Wagen = {
  year: string;
  theme: string;
  desc: string;
  image: string;
  gallery?: string[];
};

const wagensData: Wagen[] = [
  {
    year: "2026",
    theme: "??",
    desc: "??",
    image: "/images/Wagen2026.png",
    gallery: [
      "/images/wagen2026/video1.mp4",
      "/images/wagen2026/video2.mp4",
      "/images/wagen2026/video3.mp4",
      "/images/wagen2026/video4.mp4",
      "/images/wagen2026/video5.mp4",
      "/images/wagen2026/video6.mp4",
      "/images/wagen2026/video7.mp4",
    ],
  },
  {
    year: "2025",
    theme: "Kermis",
    desc: "De kermis is os um ut aeve, vastelaovend—det is os laeve!",
    image: "/images/Wagen2025.jpeg",
    gallery: [
      "/images/wagen2025/foto1.jpg",
      "/images/wagen2025/foto2.jpg",
      "/images/wagen2025/foto3.jpg",
      "/images/wagen2025/foto4.jpg",
      "/images/wagen2025/foto5.jpg",
      "/images/wagen2025/foto6.jpg",
      "/images/wagen2025/foto7.jpg",
      "/images/wagen2025/foto8.jpg",
      "/images/wagen2025/foto9.jpg",
      "/images/wagen2025/foto10.jpg",
      "/images/wagen2025/foto11.jpg",
      "/images/wagen2025/foto12.jpg",
      "/images/wagen2025/foto13.jpg",
      "/images/wagen2025/foto14.jpg",
      "/images/wagen2025/foto15.jpg",
      "/images/wagen2025/foto16.jpg",
      "/images/wagen2025/foto17.jpg",
      "/images/wagen2025/foto18.jpg",
      "/images/wagen2025/foto19.jpg",
      "/images/wagen2025/foto20.jpg",
      "/images/wagen2025/foto21.jpg",
      "/images/wagen2025/foto22.jpg",
      "/images/wagen2025/foto23.jpg",
      "/images/wagen2025/foto24.jpg",
      "/images/wagen2025/foto25.jpg",
      "/images/wagen2025/foto26.jpeg",
      "/images/wagen2025/foto27.jpeg",
      "/images/wagen2025/foto28.jpeg",
      "/images/wagen2025/foto29.jpeg",
    ],
  },
  {
    year: "2024",
    theme: "Bob de bouwer",
    desc: "Wea zien neet de BOB mer de Bouwers!",
    image: "/images/Wagen2024.jpeg",
    gallery: [
      "/images/wagen2024/foto1.jpg",
      "/images/wagen2024/foto2.jpg",
      "/images/wagen2024/foto3.jpg",
    ],
  },
  {
    year: "2023",
    theme: "Skihut",
    desc: "Bij os zit de vastelaovend in de lift!",
    image: "/images/Wagen2023.jpeg",
    gallery: [
      "/images/wagen2023/foto1.jpg",
      "/images/wagen2023/foto2.jpg",
      "/images/wagen2023/foto3.jpg",
    ],
  },
  {
    year: "2020",
    theme: "Boer",
    desc: "Neet naor het malieveld, vastelaovend det telt!",
    image: "/images/Wagen2020.jpeg",
    gallery: [
      "/images/wagen2020/foto1.jpg",
      "/images/wagen2020/foto2.jpeg",
      "/images/wagen2020/foto3.jpeg",
      "/images/wagen2020/foto4.jpg",
    ],
  },
];

export default function WagensPage() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [opened, setOpened] = useState(false);
  const [gallery, setGallery] = useState<string[]>([]);

  function toggle(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      <Head>
        <title>{t("wagens.title", "Wagens - VC AL-AAF")}</title>
        <meta
          name="description"
          content="Bekijk alle carnavalswagens van VC AL-AAF door de jaren heen"
        />
      </Head>

      <section id="wagens" className={classes.wrapper}>
        <div className={classes.container}>
          <h1 className={classes.headingPrimary}>
            {t("wagens.heading", "Onze Carnavalswagens")}
          </h1>

          {wagensData.map((wagen, idx) => {
            const side = idx % 2 === 0 ? classes.right : classes.left;
            return (
              <div
                key={wagen.year}
                className={`${classes.entry} ${side}`}
                data-year={wagen.year}
              >
                <Paper withBorder={false} shadow="md" className={classes.card}>
                  <h3 className={classes.cardTitle}>Thema: {wagen.theme}</h3>
                  <Badge className={classes.cardTag} size="md">
                    {wagen.year}
                  </Badge>

                  {wagen.image && (
                    <Box className={classes.mediaBox}>
                      <Image
                        src={wagen.image}
                        alt={`Wagen ${wagen.year}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className={classes.media}
                      />
                    </Box>
                  )}

                  <Text lineClamp={expanded[wagen.year] ? undefined : 3}>
                    {wagen.desc}
                  </Text>

                  <ActionIcon
                    className={classes.iconBtn}
                    onClick={() => toggle(wagen.year)}
                    variant="subtle"
                    aria-label={expanded[wagen.year] ? "Collapse" : "Expand"}
                    size="lg"
                  >
                    {expanded[wagen.year] ? (
                      <IconChevronUp size={24} />
                    ) : (
                      <IconChevronDown size={24} />
                    )}
                  </ActionIcon>

                  {wagen.gallery && wagen.gallery.length > 0 && (
                    <Group className={classes.actions} gap="xs">
                      <ActionIcon
                        className={classes.iconBtn}
                        onClick={() => {
                          setGallery(wagen.gallery!);
                          setOpened(true);
                        }}
                        aria-label="View gallery"
                        size="lg"
                        variant="subtle"
                      >
                        <IconPhoto size={24} />
                      </ActionIcon>
                    </Group>
                  )}
                </Paper>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
        centered
        title={t("wagens.gallery", "Fotogalerij")}
      >
        <Carousel
          withIndicators
          slideSize="100%"
          height="30rem"
          styles={{ indicator: { background: "var(--accent)" } }}
        >
          {gallery.map((src, idx) => {
            const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
            return (
              <Carousel.Slide key={`${src}-${idx}`}>
                <Box style={{ position: "relative", width: "100%", height: "100%" }}>
                  {isVideo ? (
                    <video
                      src={src}
                      controls
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={src}
                      alt={`Gallery photo ${idx + 1}`}
                      fill
                      style={{ objectFit: "contain", borderRadius: 8 }}
                    />
                  )}
                </Box>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Modal>

      <Footer />
    </>
  );
}
