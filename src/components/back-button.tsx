"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

export const BackButton = () => {
  const { back } = useRouter();

  return (
    <Button isIconOnly variant="faded" aria-label="back" onPress={back}>
      <MdChevronLeft size={22} />
    </Button>
  );
};
