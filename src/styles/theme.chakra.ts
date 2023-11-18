import { extendTheme, ChakraTheme } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/ibm-plex-mono";

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

const colors = {
  bg: "#F8FAFD",
  bg_variant: "#EFF2F5",
  red: "#EA3943",
  green: "#16C784",
  gray_slightly: "#A7B1C2",
  gray: "#A6B0C3",
  deep_gray: "#1E3146",
  blue: "#3861FB",
  blue_light: "#E7F0FF",
  light: "#FFFFFF",
  dark: "#000000",
};

const fonts = {
  int: "Inter, sans-serif",
  ipm: "IBM Plex Mono, monospace;",
};

const global = {
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
  },
};

export const theme = extendTheme({
  customTheme,
  global,
  fonts,
  colors,
});
