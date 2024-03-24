import { Providers } from "@providers";
import { fontSans } from "@styles/fonts";
import "@styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    default: "UnGallery",
    template: `%s - UnGallery`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-[100dvh] " suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "h-full text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
