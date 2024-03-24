"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export const BackButton = () => {
  const { back, push } = useRouter();

  return (
    <Button
      isIconOnly
      variant="faded"
      aria-label="back"
      onPress={() => (history.length > 1 ? back() : push("/"))}
    >
      <FaChevronLeft size={18} />
    </Button>
  );
};
