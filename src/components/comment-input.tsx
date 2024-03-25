import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useAuth } from "@providers/auth/use-auth";
import { useComments } from "@providers/comments/use-comments";
import { useState } from "react";
import { FaTurnUp } from "react-icons/fa6";

export const CommentInput = () => {
  const { user, openAuthModal } = useAuth();
  const { addComment } = useComments();
  const [content, setContent] = useState("");

  const submitHandler = () => {
    if (!content) return;

    if (!user) {
      openAuthModal();
      return;
    }

    setContent("");
    addComment({
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
        <Button size="sm" color="primary" isIconOnly onPress={submitHandler}>
          <FaTurnUp />
        </Button>
      }
    />
  );
};
