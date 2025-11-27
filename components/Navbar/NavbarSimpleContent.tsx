"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Group, Burger, Drawer, Stack, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome, IconPackage, IconBrandInstagram } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import classes from "./NavbarSimple.module.css";

const LINKS = [
  { href: "/", labelKey: "nav.home", icon: IconHome },
  { href: "/WagenPage", labelKey: "nav.wagens", icon: IconPackage },
];

const LANGS = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const SOCIALS = [
  {
    href: "https://www.instagram.com/",
    Icon: IconBrandInstagram,
    label: "Instagram",
  },
];

export default function NavbarSimpleContent() {
  const { pathname } = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "nl";

  // Burger color based on theme
  const burgerColor = theme === "theme-dark" ? "#ffffff" : "#202124";

  return (
    <header className={classes.navbar}>
      <div className={classes.inner}>
        {/* Brand */}
        <Link href="/" className={classes.brand}>
          <Image
            src="/images/Logo.png"
            width={36}
            height={36}
            alt="VC-ALAAF Logo"
            className={classes.brandLogo}
          />
          <span className={classes.brandText}>VC AL-AAF</span>
        </Link>

        {/* Links */}
        <nav className={classes.links} aria-label="Primary">
          {LINKS.map(({ href, labelKey, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${classes.link} ${active ? classes.active : ""}`}
              >
                <Icon size={18} className={classes.linkIcon} />
                {t(labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className={classes.controls}>
          {/* Social */}
          <Group gap="xs" className={classes.socials} visibleFrom="md">
            {SOCIALS.map(({ href, Icon, label }) => (
              <ActionIcon
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                aria-label={label}
                style={{ color: burgerColor }}
              >
                <Icon size={20} />
              </ActionIcon>
            ))}
          </Group>

          {/* Language */}
          <Group className={classes.langSwitcher} visibleFrom="md" gap="xs">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </Group>

          {/* Theme Toggle */}
          <Group className={classes.themeToggle} visibleFrom="md">
            <ColorSchemeToggle />
          </Group>

          {/* Burger */}
          <Burger
            opened={opened}
            onClick={open}
            className={classes.burger}
            aria-label="Open navigation drawer"
            color={burgerColor}
          />
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer opened={opened} onClose={close} size="100%" padding="md">
        <Stack gap="lg">
          {LINKS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={classes.drawerLink}
            >
              {t(labelKey)}
            </Link>
          ))}
          <Group gap="sm">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  close();
                }}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </Group>
          <Group gap="xs">
            {SOCIALS.map(({ href, Icon, label }) => (
              <ActionIcon
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                aria-label={label}
                style={{ color: burgerColor }}
              >
                <Icon size={22} />
              </ActionIcon>
            ))}
          </Group>
          <ColorSchemeToggle />
        </Stack>
      </Drawer>
    </header>
  );
}
