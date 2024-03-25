import { useAuth } from "@providers/auth/use-auth";
import { favouritesService } from "@services/favourites.service";
import { PropsWithChildren, useEffect, useState } from "react";
import { FavouritesContext } from "./favourites.context";

export const FavouritesProvider = ({ children }: PropsWithChildren) => {
  const { user, openAuthModal } = useAuth();
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      favouritesService.getFavourites(user.uid).then(setFavourites);
    } else {
      setFavourites([]);
    }
  }, [user]);

  const addFavourite = (photoId: string) => {
    if (!user) {
      openAuthModal();
      return;
    }

    favouritesService
      .addFavourite(user.uid, photoId)
      .then(() => setFavourites((favourites) => [...favourites, photoId]));
  };

  const removeFavourite = (photoId: string) => {
    if (!user) return;

    favouritesService
      .removeFavourite(user.uid, photoId)
      .then(() =>
        setFavourites((favourites) => favourites.filter((id) => id !== photoId))
      );
  };

  const contextValue: FavouritesContext = {
    favourites,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};
