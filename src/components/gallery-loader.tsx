import { Skeleton } from "@nextui-org/skeleton";

export interface GalleryLoaderProps {
  perPage?: number;
}

export const GalleryLoader = ({ perPage = 12 }: GalleryLoaderProps) => {
  return (
    <>
      {Array(perPage)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className="rounded-xl w-80 h-80" />
        ))}
    </>
  );
};
