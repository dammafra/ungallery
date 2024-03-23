import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Credits, CreditsProps } from "./credits";

export interface GalleryItemProps extends CreditsProps {
  id: string;
  image: string;
  description: string;
}

export const GalleryItem = ({
  id,
  image,
  description,
  ...props
}: GalleryItemProps) => {
  return (
    <div className="group relative">
      <Card isPressable isFooterBlurred className="w-80 h-80">
        <Link href={`/gallery/${id}`} className="h-full w-full">
          <Image
            removeWrapper
            className="object-cover h-full w-full"
            isZoomed
            alt={description}
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
            group-hover:animate-fade-up 
            group-hover:animate-duration-500"
        >
          <Credits {...props} />
        </CardFooter>
      </Card>
    </div>
  );
};
