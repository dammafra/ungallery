import { Comment as CommentModel } from "@models/comment.model";
import { User } from "@nextui-org/user";

export interface CommentProps extends CommentModel {}

export const Comment = ({
  userName,
  userProfilePicture,
  content,
}: CommentProps) => {
  return (
    <User
      name={userName}
      description={content}
      className="justify-start items-start"
      avatarProps={{
        as: "button",
        size: "sm",
        className: "transition-transform",
        color: "default",
        name: userName,
        src: userProfilePicture || undefined,
        alt: `${userName} profile picture`,
      }}
      classNames={{
        wrapper: "flex-1",
        name: "text-xs text-foreground-400",
        description: "text-sm text-inherit",
      }}
    />
  );
};
