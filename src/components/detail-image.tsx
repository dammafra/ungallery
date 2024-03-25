import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export interface DetailImageProps {
  image: string;
  imageBlur: string;
  altDescription: string;
}

export const DetailImage = ({
  image,
  imageBlur,
  altDescription,
}: DetailImageProps) => {
  return (
    <>
      <NextImage
        fill
        unoptimized
        priority
        src={imageBlur}
        alt={`${altDescription} (blurred background)`}
        className="object-cover blur-3xl animate-fade animate-duration-[3000ms]"
      />
      <div className="relative flex-1 rounded-large min-h-[24rem]">
        <Image
          as={NextImage}
          fill
          unoptimized
          priority
          src={image}
          alt={altDescription}
          className="object-contain object-center"
          classNames={{ wrapper: "min-w-full h-full" }}
        />
      </div>
    </>
  );
};
