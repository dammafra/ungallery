"use client";

import { GalleryItem } from "@components/gallery-item";
import { GalleryLoader } from "@components/gallery-loader";
import { useSearch } from "@providers/search/use-search";

export default function Gallery() {
  const { data, loading } = useSearch();

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row justify-center flex-wrap gap-4 py-8 md:py-10">
        {loading ? (
          <GalleryLoader />
        ) : (
          data.map((photo) => (
            <GalleryItem
              key={photo.id}
              id={photo.id}
              image={photo.urls.small}
              altDescription={photo.altDescription}
              authorName={photo.user.name}
              authorHandle={photo.user.username}
              authorProfile={photo.user.links.html}
              authorImage={photo.user.profile_image.medium}
            />
          ))
        )}
      </div>
    </section>
  );
}
