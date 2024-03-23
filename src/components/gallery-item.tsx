import { Image } from "@nextui-org/image";

export interface GalleryItemProps extends GalleryItemCreditsProps {
  image: string;
  description: string;
}

export const GalleryItem = ({
  image,
  description,
  ...props
}: GalleryItemProps) => {
  return (
    <div className="group relative">
      <Image
        className="cursor-pointer object-cover w-80 h-80 "
        isZoomed
        alt={description}
        src={image}
      />
      <GalleryItemCredits {...props} />
    </div>
  );
};

export interface GalleryItemCreditsProps {
  authorName: string;
  authorProfile: string;
}

const GalleryItemCredits = ({
  authorName,
  authorProfile,
}: GalleryItemCreditsProps) => {
  // TODO: improve with utils for build links?
  return (
    <p className="text-sm rounded-b-xl absolute text-white drop-shadow bottom-0 p-4 z-10 w-full group-hover:visible invisible bg-gradient-to-t from-black/60">
      Photo by{" "}
      <a
        className="underline font-bold"
        href={`${authorProfile}?utm_source=ungallery&utm_medium=referral`}
      >
        {authorName}
      </a>{" "}
      on{" "}
      <a
        className="underline font-bold"
        href="https://unsplash.com/?utm_source=ungallery&utm_medium=referral"
      >
        Unsplash
      </a>
    </p>
  );
};
