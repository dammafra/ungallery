import { Comment } from "@models/comment.model";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useAuth } from "@providers/auth/use-auth";
import { useState } from "react";
import { FaTurnUp } from "react-icons/fa6";

export interface CommentsInputProps {
  onSubmit: (comment: Comment) => void;
}

export const CommentsInput = ({ onSubmit }: CommentsInputProps) => {
  const { user, openAuthModal } = useAuth();
  const [content, setContent] = useState("");

  const submitHandler = () => {
    if (!content) return;

    if (!user) {
      openAuthModal();
      return;
    }

    setContent("");
    onSubmit({
      content,
      userId: user.uid,
      userName: user.displayName!,
      userProfilePicture: user.photoURL,
    });
  };

  return (
    <Input
      value={content}
      onValueChange={setContent}
      onKeyUp={(e) => {
        if (e.code === "Enter") submitHandler();
      }}
      placeholder="Add a comment..."
      enterKeyHint="done"
      onSubmit={console.log}
      endContent={
        <Button
          size="sm"
          className="rounded-full"
          color="primary"
          isIconOnly
          startContent={<FaTurnUp />}
          onPress={submitHandler}
        />
      }
    />
  );
};
