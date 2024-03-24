import { Comment as CommentModel } from "@models/comment.model";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Comment } from "./comment";
import { DetailLoader } from "./detail-loader";

export interface CommentsListProps {
  data: CommentModel[];
  loading: boolean;
}

export const CommentsList = ({ data, loading }: CommentsListProps) => {
  if (loading) {
    return <DetailLoader />;
  }

  return (
    <ScrollShadow className="flex flex-col gap-4 max-h-96">
      {data.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </ScrollShadow>
  );
};
