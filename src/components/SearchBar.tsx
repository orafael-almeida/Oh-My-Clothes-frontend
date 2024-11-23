"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 mr-4 p-1 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Buscar"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer flex-shrink-0 pr-4">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
};
export default SearchBar;