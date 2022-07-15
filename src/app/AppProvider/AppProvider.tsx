import React, { PropsWithChildren } from "react";

import { Provider as ReactReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import store from "../store";
import GlobalStyle from "../styles/GlobalStyle";
import { LocaleProvider } from "../../shared/language/hooks/useLocale";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LocaleProvider>
        <ReactReduxProvider store={store}>{children}</ReactReduxProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
