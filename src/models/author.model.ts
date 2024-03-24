interface AuthorProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface AuthorLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface Author {
  id: string;
  username: string;
  name: string;
  links: AuthorLinks;
  profile_image: AuthorProfileImage;
}
