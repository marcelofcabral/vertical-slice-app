import { createContext, Dispatch, SetStateAction } from "react";

import locales, { Locale } from "../locales";

type LanguageContextType = {
  currentLocale: Locale;
  setCurrentLocale?: Dispatch<SetStateAction<Locale>>;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLocale: locales["en-US"],
});

export default LanguageContext;
