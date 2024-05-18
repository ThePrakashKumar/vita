import CommentShow from "@/components/comments/CommentShow";
import { CommentWithUser } from "@/db/queries/comment";

interface CommentListProps {
  getCommentList: () => Promise<CommentWithUser[]>;
}

const CommentList = async ({ getCommentList }: CommentListProps) => {
  const comments = await getCommentList();
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        comments={comments}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
};

export default CommentList;
