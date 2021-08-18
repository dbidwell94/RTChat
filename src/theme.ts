export const theme = {
  colors: {
    background1: "#F5F5F5",
    textColor1: "#FFFFFF",
    highlightBlue: "#284B63",
    highlightBlack: "#353535",
    highlightGrey: "#C4C4C4",
    highlightGreen: "#3C6E71",
    black: "#000000"
  },
  breakpoints: {
    mobile: "1024px"
  },
  fonts: {
      ubuntu: "Ubuntu"
  },
};

type ITheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
