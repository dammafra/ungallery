"use client";

import { createContext } from "react";

export interface FavouritesContext {
  favourites: string[];
  addFavourite: (photoId: string) => void;
  removeFavourite: (photoId: string) => void;
}

export const FavouritesContext = createContext<FavouritesContext | undefined>(
  undefined
);
