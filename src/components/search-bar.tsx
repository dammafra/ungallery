"use client";

import { Input } from "@nextui-org/input";
import { useSearch } from "@providers/search/use-search";
import { generate } from "random-words";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";

export const SearchBar = () => {
  const [value, setValue] = useState(generate() as string);
  const [query] = useDebounce(value, 1000);

  const { setQuery } = useSearch();

  useEffect(() => {
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
        <CiSearch className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={value}
      onValueChange={setValue}
    />
  );
};
