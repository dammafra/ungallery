import { unsplashService } from "@services/unsplash.service";
import { useEffect, useState } from "react";

export function useGetPhoto(id: string) {
  // TODO: model/adapter
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    unsplashService
      .getPhoto(id)
      .then((res) => setData(res.response))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
}
