import { Photo } from "@models/photo.model";
import { unsplashService } from "@services/unsplash.service";
import { PropsWithChildren, useEffect, useState } from "react";
import { SearchContext } from "./search.context";

export const SearchProvider = ({ children }: PropsWithChildren) => {
  // TODO: adapter
  const [data, setData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  const [[query, page], setRequest] = useState<[string, number]>(["", 1]);
  const [perPage, setPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      setData([]);
      setLoading(false);
      setTotalPages(1);
      return;
    }

    setLoading(true);

    unsplashService
      .search(query, page, perPage)
      .then((res) => {
        setData(res.results);
        setTotalPages(res.total_pages);
      })
      .finally(() => setLoading(false));
  }, [query, page, perPage]);

  const reset = () => {
    setRequest(["", 1]);
  };

  const setQuery = (query: string) => {
    setRequest([query, 1]);
  };

  const setPage = (page: number) => {
    if (page <= totalPages) {
      setRequest([query, page]);
    }
  };

  const contextValue: SearchContext = {
    data,
    loading,

    query,
    setQuery,
    reset,

    totalPages,
    page,
    setPage,
    perPage,
    // setPerPage,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
