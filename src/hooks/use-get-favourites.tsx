import { Photo } from "@models/photo.model";
import { useFavourites } from "@providers/favourites/use-favourites";
import { unsplashService } from "@services/unsplash.service";
import { useEffect, useState } from "react";

export function useGetFavourites() {
  const [data, setData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const { favourites } = useFavourites();

  useEffect(() => {
    Promise.all(favourites.map(unsplashService.getPhoto))
      .then(setData)
      .finally(() => setLoading(false));
  }, [favourites]);

  return { data, loading };
}
