import "@/styles/globals.css";
import { Navbar } from "@components/navbar";
import { Providers } from "@providers";
import { fontSans } from "@styles/fonts";
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
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
