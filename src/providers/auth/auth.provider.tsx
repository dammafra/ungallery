import { AuthModal } from "@components/auth-modal";
import { User } from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      setShowAuthModal(false);
    }
  }, [user]);

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const contextValue: AuthContext = {
    user,
    setUser,
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
