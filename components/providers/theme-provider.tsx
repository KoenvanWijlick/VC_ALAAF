"use client";

import React from "react";
import type { ThemeName } from "@/theme";
import { getNextTheme } from "@/theme";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  cycleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "vc-alaaf-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<ThemeName>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem(STORAGE_KEY) as ThemeName) || "light";
  });

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    if (!localStorage.getItem(STORAGE_KEY)) {
      setThemeState(media.matches ? "dark" : "light");
    }
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = React.useCallback((value: ThemeName) => {
    setThemeState(value);
  }, []);

  const cycleTheme = React.useCallback(() => {
    setThemeState((prev) => getNextTheme(prev));
  }, []);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      cycleTheme,
    }),
    [theme, setTheme, cycleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
