"use client";

import { useEffect, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";

interface I18nClientProviderProps {
  children: ReactNode;
}

export default function I18nClientProvider({ children }: I18nClientProviderProps) {
  useEffect(() => {
    // Initialize i18n on mount
    i18n.init();
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
