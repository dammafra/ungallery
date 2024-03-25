"use client";

import { GalleryItem } from "@components/gallery-item";
import { GalleryLoader } from "@components/gallery-loader";
import { NoData } from "@components/no-data";
import { useSearch } from "@providers/search/use-search";
import { FaShuffle } from "react-icons/fa6";

export default function Gallery() {
  const { data, loading, query } = useSearch();

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {!query ? (
          <NoData>
            <p>Looking for the perfect photo?</p>
            <p>
              Start by typing in a search term or by pressing the shuffle button{" "}
              <FaShuffle className="inline" /> to find just what you need.{" "}
            </p>
            <p>Let&apos;s get those creative ideas flowing!</p>
          </NoData>
        ) : loading ? (
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
              It seems we couldn&apos;t find any photos matching your search
              term.
            </p>
            <p>
              Feel free to try a different keyword or phrase or press the
              shuffle button
              <FaShuffle className="inline mx-2" />
              for a surprise selection.
            </p>
            <p>Happy searching!</p>
          </NoData>
        )}
      </div>
    </section>
  );
}
