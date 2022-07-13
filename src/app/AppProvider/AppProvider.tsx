import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { LocaleProvider } from "../../shared/language/hooks/useLocale";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <LocaleProvider>{children}</LocaleProvider>
  </ThemeProvider>
);

export default AppProvider;
