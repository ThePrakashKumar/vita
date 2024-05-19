"use client";
import { search } from "@/actions/search";
import { Input } from "@nextui-org/input";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input
        name="term"
        type="input"
        label=""
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
};
export default SearchBar;
