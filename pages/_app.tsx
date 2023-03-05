import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/common/theme";
import Navbar from "../src/common/navigation/Navbar";
import NextNProgress from "nextjs-progressbar";
import { Box } from "@mui/system";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>L&apos;osti de jeu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <NextNProgress height={1} color={theme.palette.primary.main} />
        <Box
          sx={{
            pt: "80px",
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Component {...pageProps} />
        </Box>
        <Analytics />
      </ThemeProvider>
    </>
  );
}
