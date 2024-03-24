import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@nextui-org/modal";
import { AuthButton } from "./auth-button";

export const AuthModal = ({ ...props }: Omit<ModalProps, "children">) => {
  return (
    <Modal backdrop="blur" size="xs" {...props}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader>Sign in Required</ModalHeader>
            <ModalBody>
              Oops! It looks like you&apos;re trying to set a favorite or leave
              a comment on a photo. Please sign in with your Google account to
              proceed.
              <br />
              Signing in allows you to unlock additional features and enhance
              your experience.
            </ModalBody>
            <ModalFooter className="justify-center">
              <AuthButton />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
