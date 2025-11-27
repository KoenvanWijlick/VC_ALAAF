"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

// Define the shape of the theme context
interface ThemeContextType {
  theme: "theme-dark" | "theme-light";
  toggleTheme: () => void;
  setThemeMode: (mode: "theme-dark" | "theme-light") => void;
}

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// ThemeProvider component
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("vc-alaaf-theme");
      if (storedTheme === "theme-light" || storedTheme === "theme-dark") {
        return storedTheme === "theme-dark" ? "dark" : "light";
      }
      return "light"; // Default to light mode per user preference
    }
    return "light"; // Default for SSR
  });

  const theme = colorScheme === "dark" ? "theme-dark" : "theme-light";

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light", "dark");
    document.body.classList.add(theme);
    if (colorScheme === "dark") {
      document.body.classList.add("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("vc-alaaf-theme", theme);
    }
  }, [colorScheme, theme]);

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setThemeMode = (mode: "theme-dark" | "theme-light") => {
    setColorScheme(mode === "theme-dark" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
