// TODO: improve with models and adapters
class UnsplashService {
  search(query: string, page: number, perPage: number) {
    return fetch(
      "/api/unsplash-proxy/search?" +
        new URLSearchParams({
          query,
          page: page.toString(),
          perPage: perPage.toString(),
        })
    ).then((res) => res.json());
  }

  getPhoto(id: string) {
    return fetch(
      "/api/unsplash-proxy/photos?" + new URLSearchParams({ id })
    ).then((res) => res.json());
  }
}

export const unsplashService = new UnsplashService();
