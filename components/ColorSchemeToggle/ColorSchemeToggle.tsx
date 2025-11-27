"use client";

import { IconMoon, IconSun, IconChevronDown } from "@tabler/icons-react";
import { useTheme } from "../ThemeProvider";
import { useTranslation } from "react-i18next";
import classes from "./ColorSchemeToggle.module.css";

export function ColorSchemeToggle() {
  const { theme, setThemeMode } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "theme-dark";

  return (
    <button
      className={classes.themeBtn}
      type="button"
      onClick={() =>
        setThemeMode(isDark ? "theme-light" : "theme-dark")
      }
      aria-label={t("theme.toggle")}
    >
      {isDark ? <IconMoon size={14} /> : <IconSun size={14} />}
      <span>{t(`theme.${isDark ? "dark" : "light"}`)}</span>
      <IconChevronDown size={12} />
    </button>
  );
}
