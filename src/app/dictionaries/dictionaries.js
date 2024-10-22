import "server-only";

const dictionaries = {
  en: () => import("./en/common.ts").then((module) => module.default),
  ua: () => import("./ua/common.ts").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
