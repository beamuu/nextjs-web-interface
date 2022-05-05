import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { ThemeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
