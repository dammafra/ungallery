import { Author } from "./author.model";

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Photo {
  id: string;
  description: string;
  alt_description: string;
  user: Author;
  urls: PhotoUrls;
}
