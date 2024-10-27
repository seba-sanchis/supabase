import { FaSearch } from "react-icons/fa";

import { setSearch } from "@/lib/actions/store.actions";

export default function Searchform() {
  return (
    <form className="flex items-center gap-2 px-4 py-2 rounded-md border border-[--border-1] focus-within:border-[--border-2]">
      <button formAction={setSearch}>
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
