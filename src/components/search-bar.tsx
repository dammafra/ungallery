"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useSearch } from "@providers/search/use-search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { generate } from "random-words";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaShuffle, FaXmark } from "react-icons/fa6";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <FaMagnifyingGlass
          size={14}
          className="text-default-400 pointer-events-none flex-shrink-0"
        />
      }
      endContent={
        <div className="flex gap-0.5">
          {value && (
            <Button
              size="sm"
              variant="light"
              isIconOnly
              onPress={() => setValue("")}
            >
              <FaXmark
                size={14}
                className="text-default-foreground flex-shrink-0"
              />
            </Button>
          )}

          <Button
            size="sm"
            variant="light"
            isIconOnly
            onPress={() => setValue(generate() as string)}
          >
            <FaShuffle
              size={14}
              className="text-default-foreground flex-shrink-0"
            />
          </Button>
        </div>
      }
      value={value}
      onValueChange={setValue}
    />
  );
};
