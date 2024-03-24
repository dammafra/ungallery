import { Photo } from "@models/photo.model";
import { SearchResults } from "@models/search-results.model";

// TODO: improve with adapters
class UnsplashService {
  search(query: string, page: number, perPage: number): Promise<SearchResults> {
    return fetch(
      "/api/unsplash-proxy/search?" +
        new URLSearchParams({
          query,
          page: page.toString(),
          perPage: perPage.toString(),
        }),
      { cache: "default" }
    ).then((res) => res.json());
  }

  getPhoto(id: string): Promise<Photo> {
    return fetch("/api/unsplash-proxy/photos?" + new URLSearchParams({ id }), {
      cache: "default",
    }).then((res) => res.json());
  }
}

export const unsplashService = new UnsplashService();
