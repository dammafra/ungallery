import { Photo } from "@models/photo.model";
import { unsplashService } from "@services/unsplash.service";
import { useEffect, useState } from "react";

export function useGetPhoto(id: string) {
  // TODO: adapter
  const [data, setData] = useState<Photo>({} as Photo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    unsplashService
      .getPhoto(id)
      .then(setData)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
}
