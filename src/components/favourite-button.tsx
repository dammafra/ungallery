"use client";

import { Button } from "@nextui-org/button";
import { useFavourites } from "@providers/favourites/use-favourites";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export interface FavouriteButtonProps {
  photoId: string;
}

export const FavouriteButton = ({ photoId }: FavouriteButtonProps) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const isFavourite = favourites.includes(photoId);

  return (
    <Button
      isIconOnly
      className="rounded-full"
      variant="flat"
      aria-label="favourite"
      onPress={() => {
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
