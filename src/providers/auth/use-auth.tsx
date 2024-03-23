import { useContext } from "react";
import { AuthContext } from "./auth.context";

export const useAuth = () => {
  const contextState = useContext(AuthContext);

  if (!contextState) {
    throw new Error("useAuth must be used within a AuthContext");
  }

  return contextState;
};
