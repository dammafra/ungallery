"use client";

import { DetailNavbar } from "@components/detail-navbar";
import { CommentsProvider } from "@providers/comments/comments.provider";
import { PropsWithChildren } from "react";
import { DetailParams } from "./page";

export default function Layout({
  children,
  params,
}: PropsWithChildren & { params: DetailParams }) {
  return (
    <CommentsProvider photoId={params.id}>
      <div className="relative flex flex-col h-full">
        <DetailNavbar />
        <main className="container mx-auto max-w-7xl pt-6 lg:p-6 p-0 flex flex-1">
          {children}
        </main>
      </div>
    </CommentsProvider>
  );
}
