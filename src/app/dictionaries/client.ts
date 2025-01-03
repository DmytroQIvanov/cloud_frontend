"use client";
import { createI18nClient } from "next-international/client";
// import en from './en';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient(
  {
    en: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2));
      return import("./en/common");
    },
    ua: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2));
      return import("./ua/common");
    },
  },
  {
    // Uncomment to set base path
    // basePath: '/base',
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    // fallbackLocale: en,
  },
);
