"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export const BackButton = () => {
  const { back } = useRouter();

  return (
    <Button isIconOnly variant="faded" aria-label="back" onPress={back}>
      <FaChevronLeft size={14} />
    </Button>
  );
};
