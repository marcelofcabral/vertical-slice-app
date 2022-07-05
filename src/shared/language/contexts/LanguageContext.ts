import { createContext, SetStateAction } from "react";

import locales, { Locale } from "../locales";

const languageContext = createContext<{ currentLocale: Locale; setCurrentLocale?: SetStateAction<Locale> }>({
  currentLocale: locales["pt-BR"],
});

export default languageContext;
