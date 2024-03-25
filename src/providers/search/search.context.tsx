"use client";

import { Photo } from "@models/photo.model";
import { createContext } from "react";

export interface SearchContext {
  data: Photo[];
  loading: boolean;

  query: string;
  setQuery(query: string): void;
  reset: () => void;

  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  // setPerPage: (perPage: number) => void;
}

export const SearchContext = createContext<SearchContext | undefined>(
  undefined
);
