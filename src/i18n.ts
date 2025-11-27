import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import commonNL from "../public/locales/nl/common.json";
import commonEN from "../public/locales/en/common.json";

const resources = {
  nl: {
    translation: commonNL,
  },
  en: {
    translation: commonEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "nl",
    lng: "nl", // Default language
    debug: false,
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
