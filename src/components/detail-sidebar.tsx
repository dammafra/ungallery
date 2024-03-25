import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { CommentInput } from "./comment-input";
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
  return (
    <Card className="sticky bottom-0 z-10 w-full h-fit self-center lg:w-[28rem] animate-fade-up lg:animate-fade-left rounded-b-none lg:rounded-b-large">
      <CardHeader className="flex-col items-start gap-4 pb-9 lg:pb-3">
        <div className="flex flex-row justify-between w-full gap-2">
          <Credits {...creditsProps} />
          <CommentsModal />
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
        <CommentInput />
      </CardFooter>
    </Card>
  );
};
