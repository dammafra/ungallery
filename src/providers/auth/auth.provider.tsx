import { storageService } from "@services/storage.service";
import { User } from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  }, []);

  useEffect(() => {
    user
      ? storageService.getFavourites(user.uid).then(setFavourites)
      : setFavourites([]);
  }, [user]);

  const addFavourite = (photoId: string) => {
    if (!user) return;

    storageService
      .addFavourite(user.uid, photoId)
      .then(() => setFavourites((favourites) => [...favourites, photoId]));
  };

  const removeFavourite = (photoId: string) => {
    if (!user) return;

    storageService
      .removeFavourite(user.uid, photoId)
      .then(() =>
        setFavourites((favourites) => favourites.filter((id) => id !== photoId))
      );
  };

  const contextValue: AuthContext = {
    user,
    setUser,
    favourites,

    addFavourite,
    removeFavourite,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
