import { DetailNavbar } from "@components/detail-navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col h-full">
      <DetailNavbar />
      <main className="container mx-auto max-w-7xl pt-6 lg:p-6 p-0 flex flex-1">
        {children}
      </main>
    </div>
  );
}
