import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
    primary: "#1168b0",
    primaryHover: "#145388",
    primaryActive: "#0c3252",
    secondary: "#60b2f7",
    background: "#e8eaec",
    card: "#F1F3F3",
    text: "#04131e",
    mutedText: "#c4c7ca",
    disabledButton: "#6a90b0",
  },
  fontWeights: {
    regular: 400,
    bold: 600,
  },
  fontSizes: {
    small: "1.6rem",
    medium: "2.0rem",
    large: "2.5rem",
  },
  buttonSizes: {
    small: {
      width: "5rem",
      height: "4rem",
    },
    medium: {
      width: "9rem",
      height: "4.5rem",
    },
    large: {
      width: "14rem",
      height: "6rem",
    },
  },
  navBarHeight: "7vh",
};

export default appTheme;
