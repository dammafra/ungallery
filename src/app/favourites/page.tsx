"use client";

import { GalleryItem } from "@components/gallery-item";
import { GalleryLoader } from "@components/gallery-loader";
import { NoData } from "@components/no-data";
import { useGetFavourites } from "@hooks/use-get-favourites";
import { FaHeart } from "react-icons/fa6";

export default function Favourites() {
  const { data, loading } = useGetFavourites();

  // TODO: refactor with gallery/search/page?
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {loading ? (
          <GalleryLoader />
        ) : !!data.length ? (
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
        ) : (
          <NoData>
            <p>
              Love a photo? Click the heart
              <FaHeart className="inline mx-2" color="red" />
              to add it to your favorites and easily access it later.
            </p>
            <p>Your favorites are just a click away!</p>
          </NoData>
        )}
      </div>
    </section>
  );
}
