"use client";

import { Button } from "@nextui-org/button";
import { useAuth } from "@providers/auth/use-auth";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export interface FavouriteButtonProps {
  photoId: string;
}

export const FavouriteButton = ({ photoId }: FavouriteButtonProps) => {
  const { user, favourites, addFavourite, removeFavourite, openAuthModal } =
    useAuth();
  const isFavourite = favourites.includes(photoId);

  return (
    <Button
      isIconOnly
      className="rounded-full"
      variant="flat"
      aria-label="favourite"
      onPress={() => {
        if (!user) {
          openAuthModal();
          return;
        }

        isFavourite ? removeFavourite(photoId) : addFavourite(photoId);
      }}
    >
      {isFavourite ? (
        <FaHeart color="red" size={22} />
      ) : (
        <FaRegHeart size={22} />
      )}
    </Button>
  );
};
