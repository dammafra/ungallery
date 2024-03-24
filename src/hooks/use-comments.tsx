import { Comment } from "@models/comment.model";
import { commentsService } from "@services/comments.service";
import { useEffect, useState } from "react";

export function useComments(photoId: string) {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLoading(true);

    commentsService
      .getComments(photoId)
      .then(setData)
      .finally(() => setLoading(false));
  };

  const post = (comment: Comment) => {
    commentsService
      .addComment(photoId, comment)
      .then(() => setData((data) => [...data, comment]));
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoId]);

  return { data, loading, post };
}
