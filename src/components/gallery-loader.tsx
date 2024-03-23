import { Skeleton } from "@nextui-org/skeleton";
import { useSearch } from "@providers/search/use-search";

export const GalleryLoader = () => {
  const { perPage } = useSearch();

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
