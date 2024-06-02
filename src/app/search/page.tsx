import PostList from "@/components/posts/PostList";
import { fetchPostBySearchTerm } from "@/db/queries/post";
import { redirect } from "next/navigation";

interface SearchParamsProps {
  searchParams: { term: string };
}

const SearchPage = async ({ searchParams }: SearchParamsProps) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <span>{searchParams.term}</span>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
