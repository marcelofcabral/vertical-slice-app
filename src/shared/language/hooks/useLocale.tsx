import React, { PropsWithChildren, useState, useContext } from "react";

import LanguageContext from "../contexts/LanguageContext";
import locales from "../locales";

export const LocaleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(locales["en-US"]);

  return <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>{children}</LanguageContext.Provider>;
};

const useLocale = () => useContext(LanguageContext);

export default useLocale;
