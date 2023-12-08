import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-main)',
    body: 'var(--font-main)',
  },
  config,
});
