import "styled-components";

type ButtonDimensions = {
  width: string | number;
  height: string | number;
};

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
      disabledButton: string;
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
    buttonSizes: {
      small: ButtonDimensions;
      medium: ButtonDimensions;
      large: ButtonDimensions;
    };
    navBarHeight: string | number;
  }
}
