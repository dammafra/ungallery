import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { useComments } from "@providers/comments/use-comments";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa6";
import { CommentInput } from "./comment-input";
import { CommentsList } from "./comments-list";

export const CommentsModal = () => {
  const { forward } = useRouter();
  const { comments } = useComments();
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // tailwind lg breakpoint
      if (window.innerWidth > 1024) setShowCommentsModal(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const preventHistoryBack = (event: PopStateEvent) => {
      if (!showCommentsModal) {
        return;
      }

      event.preventDefault();
      forward();
      setShowCommentsModal(false);
    };

    window.addEventListener("popstate", preventHistoryBack);

    return () => {
      window.removeEventListener("popstate", preventHistoryBack);
    };
  }, [forward, showCommentsModal]);

  return (
    <>
      <Badge
        size="md"
        color="default"
        className="flex lg:hidden"
        content={comments.length}
        isInvisible={!comments.length}
      >
        <Button
          isIconOnly
          variant="flat"
          startContent={<FaRegComment size={22} />}
          className="flex lg:hidden rounded-full"
          onClick={() => setShowCommentsModal(true)}
        />
      </Badge>

      <Modal
        isOpen={showCommentsModal}
        onClose={() => setShowCommentsModal(false)}
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
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Comments
              </ModalHeader>
              <ModalBody>
                <CommentsList />
              </ModalBody>
              <ModalFooter>
                <CommentInput />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
