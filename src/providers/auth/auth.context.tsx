"use client";

import { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContext {
  user?: User;
  setUser: (user?: User) => void;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);
