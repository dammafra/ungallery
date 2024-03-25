import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CommentsInput } from "./comments-input";
import { CommentsList } from "./comments-list";

export const CommentsModal = ({
  isOpen,
  onClose,
  ...props
}: Omit<ModalProps, "children" | "onSubmit">) => {
  const { forward } = useRouter();

  useEffect(() => {
    const preventHistoryBack = (event: PopStateEvent) => {
      if (!isOpen) {
        return;
      }

      event.preventDefault();
      forward();
      onClose && onClose();
    };

    window.addEventListener("popstate", preventHistoryBack);

    return () => {
      window.removeEventListener("popstate", preventHistoryBack);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: 50,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      backdrop="blur"
      placement="center"
      size="full"
      classNames={{
        wrapper: "flex flex-col justify-end",
      }}
      className="w-screen h-[532px] !rounded-t-large"
      {...props}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Comments</ModalHeader>
            <ModalBody>
              <CommentsList />
            </ModalBody>
            <ModalFooter>
              <CommentsInput />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
