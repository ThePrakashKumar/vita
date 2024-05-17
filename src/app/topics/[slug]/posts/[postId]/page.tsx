import Link from "next/link";
import PostShow from "@/components/posts/PostShow";
import paths from "@/paths";
import { db } from "@/db";
import { Post } from "@prisma/client";
import CommentCreateForm from "@/components/comments/CommentCreateForm";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

const PostPage = async ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
    </div>
  );
};

export default PostPage;
