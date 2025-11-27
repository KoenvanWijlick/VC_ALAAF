"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text, Box, Container } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import classes from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box component="footer" className={classes.footer}>
      <Container size="sm">
        <Text className={classes.text}>
          {t("footer.followUs", "Volg ons op Instagram")}
        </Text>
        <Button
          component="a"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          variant="gradient"
          gradient={{ from: "pink", to: "orange" }}
          radius="xl"
          size="md"
          rightSection={<IconBrandInstagram size={18} />}
          className={classes.button}
        >
          {t("footer.instagram", "Instagram")}
        </Button>
        <Text className={classes.copyright}>
          © {new Date().getFullYear()} VC AL-AAF. {t("footer.rights", "Alle rechten voorbehouden.")}
        </Text>
      </Container>
    </Box>
  );
}
