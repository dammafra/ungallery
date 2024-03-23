"use client";

import { Input } from "@nextui-org/input";
import { useSearch } from "@providers/search/use-search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { generate } from "random-words";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDebounce } from "use-debounce";

export const SearchBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get("query") || (generate() as string)
  );
  const [query] = useDebounce(value, 1000);

  const { setQuery } = useSearch();

  useEffect(() => {
    router.replace(`${pathname}?${new URLSearchParams({ query })}`);
    setQuery(query);
  }, [query]);

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <MdSearch
          size={22}
          className="text-base text-default-400 pointer-events-none flex-shrink-0"
        />
      }
      type="search"
      value={value}
      onValueChange={setValue}
    />
  );
};
