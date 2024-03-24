import { Photo } from "./photo.model";

export interface SearchResults {
  total_pages: number;
  results: Photo[];
}
