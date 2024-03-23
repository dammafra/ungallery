"use client";

import { GalleryFooter } from "@components/gallery-footer";
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
              image={photo.urls.small}
              description={photo.description}
              authorName={photo.user.name}
              authorProfile={photo.user.links.html}
            />
          ))
        )}
      </div>

      <GalleryFooter />
    </section>
  );
}
