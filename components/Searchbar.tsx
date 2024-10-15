"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";

import { Search } from "@/types";
import getSearch from "@/lib/actions/database.actions";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState<Search[]>();

  const [debounce, setDebounce] = useState<NodeJS.Timeout>();

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newQuery = e.target.value;

    // Clear the previous timeout if the user types within the 4 seconds
    if (debounce) {
      clearTimeout(debounce);
    }

    // Set a new timeout to trigger the search after 4 seconds
    const newTimeout = setTimeout(async () => {
      if (newQuery.trim()) {
        const response = await getSearch(newQuery);
        setSearch(response);
      }
    }, 400);

    // Save the timeout so we can clear it if needed
    setDebounce(newTimeout);

    setQuery(newQuery);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      console.log(query);
    }
  }

  return (
    <div className="relative flex flex-col max-w-lg w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-2 border border-[--border-1] focus-within:border-[--border-2] bg-[--background-2] rounded-full transition-colors duration-200"
      >
        <input
          type="text"
          value={query}
          placeholder="Search..."
          onChange={handleChange}
          className="peer flex-1 bg-transparent outline-none"
        />

        <button
          type="submit"
          className="p-2 text-[--foreground-2] peer-focus:text-[--foreground-1] transition-colors duration-200"
        >
          <FaSearch size={14} />
        </button>
      </form>
      {search && (
        <ul className="absolute top-14 flex flex-col gap-2 w-full p-2 rounded-lg border border-[--border-1] bg-[--background-2]">
          {search.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${item.type}/${item.name
                  .toLocaleLowerCase()
                  .replace(/ /g, "-")}`}
                className="group flex justify-between p-2 rounded-lg text-[--foreground-2] hover:text-[--foreground-1] transition-color duration-200"
              >
                <span className="flex gap-1 items-center">
                  {item.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 duration-200">
                    <FaChevronRight size={14} />
                  </span>
                </span>
                <span>{item.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
