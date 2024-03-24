import { AuthModal } from "@components/auth-modal";
import { storageService } from "@services/storage.service";
import { User } from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [favourites, setFavourites] = useState<string[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      storageService.getFavourites(user.uid).then(setFavourites);
      setShowAuthModal(false);
    } else {
      setFavourites([]);
    }
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

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const contextValue: AuthContext = {
    user,
    setUser,
    favourites,

    addFavourite,
    removeFavourite,

    openAuthModal,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </AuthContext.Provider>
  );
};
