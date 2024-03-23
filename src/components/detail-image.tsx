import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export interface DetailImageProps {
  image: string;
  imageBlur: string;
  description: string;
}

export const DetailImage = ({
  image,
  imageBlur,
  description,
}: DetailImageProps) => {
  return (
    <>
      <NextImage
        fill
        unoptimized
        src={imageBlur}
        alt={`${description} (blurred background)`}
        className="object-cover blur-3xl animate-fade animate-duration-[3000ms]"
      />
      <div className="relative flex-1 rounded-large min-h-[28rem]">
        <Image
          as={NextImage}
          fill
          unoptimized
          src={image}
          alt={description}
          className="object-contain object-center"
          classNames={{ wrapper: "min-w-full h-full" }}
        />
      </div>
    </>
  );
};
