import { createContext } from "react";

import locales from "../../locales";
import { LanguageContextType } from "./types";

const LanguageContext = createContext<LanguageContextType>({
  currentLocale: locales["en-US"],
});

export default LanguageContext;
