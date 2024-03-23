import { useContext } from "react";
import { SearchContext } from "./search.context";

export const useSearch = () => {
  const contextState = useContext(SearchContext);

  if (!contextState) {
    throw new Error("useSearch must be used within a SearchContext");
  }

  return contextState;
};
