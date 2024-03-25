import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { useComments } from "@providers/comments/use-comments";
import { useState } from "react";
import { FaComment } from "react-icons/fa6";
import { CommentsInput } from "./comments-input";
import { CommentsList } from "./comments-list";
import { CommentsModal } from "./comments-modal";
import { Credits, CreditsProps } from "./credits";
import { FavouriteButton } from "./favourite-button";

export interface DetailSidebarProps {
  id: string;
  description: string;
  creditsProps: CreditsProps;
}

export const DetailSidebar = ({
  id,
  description,
  creditsProps,
}: DetailSidebarProps) => {
  const { comments } = useComments();
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  return (
    <>
      <Card className="sticky bottom-0 z-10 w-full h-fit self-center lg:w-[28rem] animate-fade-up lg:animate-fade-left rounded-b-none lg:rounded-b-large">
        <CardHeader className="flex-col items-start gap-4">
          <div className="flex flex-row justify-between w-full gap-2">
            <Credits {...creditsProps} />
            <Badge
              size="sm"
              color="default"
              content={comments.length}
              isInvisible={!comments.length}
            >
              <Button
                isIconOnly
                variant="flat"
                startContent={<FaComment />}
                className="flex lg:hidden rounded-full"
                onClick={() => setShowCommentsModal(true)}
              />
            </Badge>
            <FavouriteButton photoId={id} />
          </div>
          {description && (
            <p className="italic text-sm">&quot;{description}&quot;</p>
          )}
        </CardHeader>
        <Divider />

        <CardBody className="hidden lg:flex h-96">
          <CommentsList />
        </CardBody>
        <Divider className="hidden lg:flex" />

        <CardFooter className="hidden lg:flex">
          <CommentsInput />
        </CardFooter>
      </Card>

      <CommentsModal
        isOpen={showCommentsModal}
        onClose={() => setShowCommentsModal(false)}
      />
    </>
  );
};
