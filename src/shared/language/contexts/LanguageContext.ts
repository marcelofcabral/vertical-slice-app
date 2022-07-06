import { createContext, Dispatch, SetStateAction } from "react";

import locales, { Locale } from "../locales";

const LanguageContext = createContext<{ currentLocale: Locale; setCurrentLocale?: Dispatch<SetStateAction<Locale>> }>({
  currentLocale: locales["pt-BR"],
});

export default LanguageContext;
