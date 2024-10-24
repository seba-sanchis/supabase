"use client";

import { setSearch } from "@/lib/actions/store.actions";
import { FaSearch } from "react-icons/fa";

export default function Searchform() {
  function handleSubmit(formData: FormData) {
    const data = {
      email: formData.get("search") as string,
    };

    setSearch(data.email);
  }

  return (
    <form className="flex items-center gap-2 px-4 py-2 rounded-md border border-[--border-1] focus-within:border-[--border-2]">
      <button formAction={handleSubmit}>
        <FaSearch size={16} className="text-[--foreground-2]" />
      </button>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Buscar..."
        className="flex-1 bg-transparent outline-none"
      />
    </form>
  );
}
