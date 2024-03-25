import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useAuth } from "@providers/auth/use-auth";
import { useComments } from "@providers/comments/use-comments";
import { Comment } from "./comment";
import { CommentDeleteButton } from "./comment-delete-button";
import { DetailLoader } from "./detail-loader";
import { NoData } from "./no-data";

export const CommentsList = () => {
  const { user } = useAuth();
  const { comments, loading, removeComment } = useComments();

  if (loading) {
    return <DetailLoader />;
  }

  return !!comments.length ? (
    <ScrollShadow className="flex flex-col gap-4 lg:h-96 max-h-96">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex selection:w-full justify-between items-center pr-4"
        >
          <Comment {...comment} />

          {user?.uid === comment.userId && (
            <CommentDeleteButton onConfirm={() => removeComment(comment)} />
          )}
        </div>
      ))}
    </ScrollShadow>
  ) : (
    <NoData>
      <p>No comments yet on this photo.</p>
      <p>Be the first to share your thoughts and feelings!</p>
    </NoData>
  );
};
