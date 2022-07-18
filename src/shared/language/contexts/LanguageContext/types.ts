import { Dispatch, SetStateAction } from "react";

import { Locale } from "../../locales/types";

export type LanguageContextType = {
  currentLocale: Locale;
  setCurrentLocale?: Dispatch<SetStateAction<Locale>>;
};
