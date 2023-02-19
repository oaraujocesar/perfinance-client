import localFont from "@next/font/local";
const googleSans = localFont({
  src: [
    {
      path: "./assets/fonts/GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/GoogleSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/GoogleSans-Medium.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./assets/fonts/GoogleSans-Bold.woff2",
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
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ height: "100vh" }} className={googleSans.className}>
        {children}
      </body>
    </html>
  );
}
