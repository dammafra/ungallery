import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@nextui-org/modal";
import { CommentsInput, CommentsInputProps } from "./comments-input";
import { CommentsList, CommentsListProps } from "./comments-list";

export interface CommentsModalProps
  extends CommentsListProps,
    CommentsInputProps,
    Omit<ModalProps, "children" | "onSubmit"> {}

export const CommentsModal = ({
  data,
  loading,
  onSubmit,
  ...props
}: CommentsModalProps) => {
  return (
    <Modal
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
        backdrop: "lg:hidden",
      }}
      className="w-screen h-[532px] lg:hidden !rounded-t-large"
      {...props}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Comments</ModalHeader>
            <ModalBody>
              <CommentsList data={data} loading={loading} />
            </ModalBody>
            <ModalFooter>
              <CommentsInput onSubmit={onSubmit} />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
