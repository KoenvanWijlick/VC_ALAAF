"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Paper,
  TextInput,
  Textarea,
  Button,
  Group,
  Container,
  Title,
  Text,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail, IconCheck, IconX } from "@tabler/icons-react";
import classes from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm({
    initialValues: { naam: "", email: "", telefoon: "", bericht: "" },
    validate: {
      naam: (v: string) =>
        v.trim().length < 2 ? t("form.error.name", "Vul uw naam in") : null,
      email: (v: string) =>
        /^\S+@\S+$/.test(v)
          ? null
          : t("form.error.email", "Ongeldig e-mailadres"),
      telefoon: (v: string) =>
        /^\+?\d{6,15}$/.test(v)
          ? null
          : t("form.error.phone", "Ongeldig telefoonnummer"),
      bericht: (v: string) =>
        v.trim().length === 0
          ? t("form.error.message", "Vul een bericht in")
          : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, v as string));
      const res = await fetch("https://formspree.io/f/xyzkbyza", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        setNotif({
          type: "success",
          message: t("form.success", "Bedankt! We nemen snel contact op."),
        });
        form.reset();
      } else throw new Error();
    } catch {
      setNotif({
        type: "error",
        message: t("form.error.generic", "Er ging iets mis. Probeer opnieuw."),
      });
    } finally {
      setLoading(false);
      setTimeout(() => setNotif(null), 5000);
    }
  };

  return (
    <section id="sponsor" className={classes.wrapper}>
      <Container size="sm">
        <Paper shadow="sm" className={classes.form}>
          <Title order={2} className={classes.heading}>
            {t("contact.heading", "Word sponsor!")}
          </Title>
          <Text className={classes.text}>
            {t("contact.description", "Interesse? Vul het formulier in of bel")}{" "}
            <a
              href="tel:+31640167158"
              className={classes.phone}
            >
              +31 6 40167158
            </a>
            .
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)} className={classes.formFields}>
            <TextInput
              label={t("form.name", "Naam / Bedrijf")}
              placeholder={t("form.name", "Naam / Bedrijf")}
              required
              classNames={{ root: classes.inputRoot }}
              {...form.getInputProps("naam")}
            />
            <TextInput
              label={t("form.email", "E-mail")}
              placeholder={t("form.email", "E-mail")}
              required
              classNames={{ root: classes.inputRoot }}
              {...form.getInputProps("email")}
            />
            <TextInput
              label={t("form.phone", "Telefoon")}
              placeholder={t("form.phone", "Telefoon")}
              required
              classNames={{ root: classes.inputRoot }}
              {...form.getInputProps("telefoon")}
            />
            <Textarea
              label={t("form.message", "Uw bericht")}
              placeholder={t("form.message", "Uw bericht")}
              minRows={4}
              required
              classNames={{ root: classes.inputRoot }}
              {...form.getInputProps("bericht")}
            />
            <Button
              type="submit"
              fullWidth
              loading={loading}
              className={classes.submitBtn}
              leftSection={<IconMail size={18} />}
            >
              {t("form.submit", "Versturen")}
            </Button>
          </form>
        </Paper>

        {/* Inline Notification */}
        {notif && (
          <div className={classes.notificationBox}>
            <Notification
              icon={notif.type === "success" ? <IconCheck /> : <IconX />}
              color={notif.type === "success" ? "green" : "red"}
              onClose={() => setNotif(null)}
            >
              {notif.message}
            </Notification>
          </div>
        )}
      </Container>
    </section>
  );
}
