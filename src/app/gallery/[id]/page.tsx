"use client";

import { DetailImage } from "@components/detail-image";
import { DetailLoader } from "@components/detail-loader";
import { DetailSidebar } from "@components/detail-sidebar";
import { useGetPhoto } from "@hooks/use-get-photo";
import { CommentsProvider } from "@providers/comments/comments.provider";

interface DetailParams {
  id: string;
}

export default function Detail({ params }: { params: DetailParams }) {
  const { data, loading } = useGetPhoto(params.id);

  return loading ? (
    <DetailLoader />
  ) : (
    <CommentsProvider photoId={params.id}>
      <section className="flex flex-col lg:flex-row w-full gap-4 justify-between lg:justify-center">
        <DetailImage
          image={data.urls.full}
          imageBlur={data.urls.thumb}
          altDescription={data.alt_description}
        />

        <DetailSidebar
          id={data.id}
          description={data.description}
          creditsProps={{
            size: "lg",
            authorName: data.user.name,
            authorHandle: data.user.username,
            authorProfile: data.user.links.html,
            authorImage: data.user.profile_image.medium,
          }}
        />
      </section>
    </CommentsProvider>
  );
}
