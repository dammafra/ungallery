"use client";

import { GalleryFooter } from "@components/gallery-footer";
import { GalleryNavbar } from "@components/gallery-navbar";
import { SearchProvider } from "@providers/search/search.provider";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SearchProvider>
      <div className="relative flex flex-col">
        <GalleryNavbar />
        <main className="container mx-auto max-w-7xl p-6">{children}</main>
        <GalleryFooter />
      </div>
    </SearchProvider>
  );
}
