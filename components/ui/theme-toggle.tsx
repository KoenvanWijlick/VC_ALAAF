"use client";

import { Button } from "./button";
import { useTheme } from "@/components/providers/theme-provider";
import { getNextTheme } from "@/theme";

const labels: Record<string, string> = {
  light: "Light",
  dark: "Dark",
  contrast: "High Contrast",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      aria-label={`Switch theme (current ${labels[theme]})`}
      onClick={() => setTheme(getNextTheme(theme))}
    >
      {labels[theme]}
    </Button>
  );
}
