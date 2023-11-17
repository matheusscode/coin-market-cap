import { extendTheme, ChakraTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

const colors = {};

const fonts = {
  int: "Inter, sans-serif",
};

const global = {
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
};

export const theme = extendTheme({
  customTheme,
  global,
  fonts,
  colors,
});
