import { useContext } from "react";
import { CommentsContext } from "./comments.context";

export const useComments = () => {
  const contextState = useContext(CommentsContext);

  if (!contextState) {
    throw new Error("useComments must be used within a CommentsContext");
  }

  return contextState;
};
