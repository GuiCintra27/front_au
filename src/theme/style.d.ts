import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
      disabled: string;
      grey: {
        main: string;
      };
      red: {
        main: string;
      };
      text: {
        primary: string;
        secondary: string;
        white: string;
      };
    };
  }
}
