import { string } from "zod";
import { db } from "..";
import type { Comment } from "@prisma/client";

export type CommentWithUser = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentByPostId = async (
  postId: string
): Promise<CommentWithUser[]> => {
  return db.comment.findMany({
    where: { postId },
    include: { user: { select: { name: true, image: true } } },
  });
};

export const fetchCommentById = async (id: string): Promise<Comment | null> => {
  return db.comment.findFirst({ where: { id } });
};
