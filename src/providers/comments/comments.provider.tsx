import { Comment } from "@models/comment.model";
import { commentsService } from "@services/comments.service";
import { PropsWithChildren, useEffect, useState } from "react";
import { CommentsContext } from "./comments.context";

export interface CommentsProviderProps extends PropsWithChildren {
  photoId: string;
}

export const CommentsProvider = ({
  photoId,
  children,
}: CommentsProviderProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLoading(true);

    commentsService
      .getComments(photoId)
      .then(setComments)
      .finally(() => setLoading(false));
  };

  const addComment = (comment: Comment) => {
    commentsService
      .addComment(photoId, comment)
      .then(() => setComments((comments) => [...comments, comment]));
  };

  const removeComment = (comment: Comment) => {
    commentsService
      .removeComment(photoId, comment)
      .then(() =>
        setComments((comments) => comments.filter((c) => c !== comment))
      );
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoId]);

  const contextValue: CommentsContext = {
    comments,
    loading,
    addComment,
    removeComment,
  };

  return (
    <CommentsContext.Provider value={contextValue}>
      {children}
    </CommentsContext.Provider>
  );
};
