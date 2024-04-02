// path helper function give us path based on the argument we pass
// so later on we decided to change the path structure we don't have to manually go everywhere change we can just make the changes here
const path = {
  home(): string {
    return "/";
  },
  topicShow(slug: string): string {
    return `/topics/${slug}`;
  },
  postCreate(slug: string): string {
    return `/topics/${slug}/posts/new`;
  },
  postShow(slug: string, postId: string): string {
    return `/topics/${slug}/posts/${postId}`;
  },
};

export default path;
