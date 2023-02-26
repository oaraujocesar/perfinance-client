"use client";

import localFont from "@next/font/local";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import "@globals/styles/reset.css";
import "@globals/styles/globals.css";
import { theme } from "@globals/styles/theme";
import { SnackbarProvider } from "notistack";

const googleSans = localFont({
  src: [
    {
      path: "../globals/fonts/GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../globals/fonts/GoogleSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../globals/fonts/GoogleSans-Medium.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../globals/fonts/GoogleSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head />
        <body className={googleSans.className}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            autoHideDuration={3000}
            preventDuplicate={true}
          >
            {children}
          </SnackbarProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
