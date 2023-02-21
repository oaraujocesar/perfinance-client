"use client";

import "@globals/styles/reset.css";
import "@globals/styles/globals.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "@globals/styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
