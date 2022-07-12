import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      background: string;
      card: string;
      text: string;
      mutedText: string;
    };
    fontWeights: {
      regular: number;
      bold: number;
    };
    fontSizes: {
      small: string | number;
      medium: string | number;
      large: string | number;
    };
    navBarHeight: string | number;
  }
}
