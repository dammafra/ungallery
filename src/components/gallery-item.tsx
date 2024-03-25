import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Credits, CreditsProps } from "./credits";
import { FavouriteButton } from "./favourite-button";

export interface GalleryItemProps {
  id: string;
  image: string;
  altDescription: string;
  creditsProps: CreditsProps;
}

export const GalleryItem = ({
  id,
  image,
  altDescription,
  creditsProps,
}: GalleryItemProps) => {
  return (
    <div className="group relative">
      <Card isFooterBlurred className="w-80 h-80">
        <CardHeader className="absolute top-1 z-20 justify-end">
          <FavouriteButton photoId={id} />
        </CardHeader>

        <Link href={`/gallery/${id}`} className="h-full w-full">
          <Image
            removeWrapper
            className="object-cover h-full w-full"
            isZoomed
            alt={altDescription}
            src={image}
          />
        </Link>

        <CardFooter
          className="
            rounded-large
            pointer-events-none 
            bg-background/80 
            absolute bottom-1 z-10
            mx-1 w-[calc(100%-8px)] 
            invisible group-hover:visible 
            group-hover:animate-fade 
            group-hover:animate-duration-500"
        >
          <Credits {...creditsProps} />
        </CardFooter>
      </Card>
    </div>
  );
};
