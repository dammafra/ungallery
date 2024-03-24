"use client";

import { GalleryItem } from "@components/gallery-item";
import { GalleryLoader } from "@components/gallery-loader";
import { useGetFavourites } from "@hooks/use-get-favourites";

export default function Favourites() {
  const { data, loading } = useGetFavourites();

  // TODO: refactor with gallery/page?
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {loading ? (
          <GalleryLoader />
        ) : (
          data.map((photo) => (
            <GalleryItem
              key={photo.id}
              id={photo.id}
              image={photo.urls.small}
              altDescription={photo.alt_description}
              creditsProps={{
                authorName: photo.user.name,
                authorHandle: photo.user.username,
                authorProfile: photo.user.links.html,
                authorImage: photo.user.profile_image.medium,
              }}
            />
          ))
        )}
      </div>
    </section>
  );
}
