import { GalleryNavbar } from "@components/gallery-navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col">
      <GalleryNavbar />
      <main className="container mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
}
