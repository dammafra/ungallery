import { useContext } from "react";
import { FavouritesContext } from "./favourites.context";

export const useFavourites = () => {
  const contextState = useContext(FavouritesContext);

  if (!contextState) {
    throw new Error("useFavourites must be used within a FavouritesContext");
  }

  return contextState;
};
