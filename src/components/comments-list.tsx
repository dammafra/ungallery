import { Comment as CommentModel } from "@models/comment.model";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Comment } from "./comment";
import { DetailLoader } from "./detail-loader";
import { NoData } from "./no-data";

export interface CommentsListProps {
  data: CommentModel[];
  loading: boolean;
}

export const CommentsList = ({ data, loading }: CommentsListProps) => {
  if (loading) {
    return <DetailLoader />;
  }

  return !!data.length ? (
    <ScrollShadow className="flex flex-col gap-4 lg:h-96 max-h-96">
      {data.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </ScrollShadow>
  ) : (
    <NoData>
      <p>No comments yet on this photo.</p>
      <p>Be the first to share your thoughts and feelings!</p>
    </NoData>
  );
};
