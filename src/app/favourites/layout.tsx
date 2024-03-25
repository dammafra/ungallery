"use client";

import { FavouritesNavbar } from "@components/favourites-navbar";
import { PropsWithChildren } from "react";

// TODO: refactor with gallery/search/layout?
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col">
      <FavouritesNavbar />
      <main className="container mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
}
