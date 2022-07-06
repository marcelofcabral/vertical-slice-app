import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      background: string;
      text: string;
      mutedText: string;
    };
    fontWeights: {
      regular: number;
      bold: number;
    };
  }
}
