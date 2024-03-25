import { AuthModal } from "@components/auth-modal";
import { authService } from "@services/auth.service";
import { User } from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    authService.subscribe(setUser);
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
