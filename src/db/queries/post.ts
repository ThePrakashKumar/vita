import { db } from "..";
import type { Post } from "@prisma/client";

export type PostData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// PostData type can also be written like:
// here we are taking whatever is begin return by fetchPostBySlug and then awaiting on it to get the type and as fetchPostBySlug is returning a promise [number] tell to pick one
// export type PostData = Awaited<ReturnType<typeof fetchPostBySlug>[number]

export const fetchPostBySlug = (slug: string): Promise<PostData[]> => {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};
