import Image from "next/image";

import { Searchbar } from "@/components";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="relative flex flex-col items-center bottom-16 gap-4 max-w-2xl w-full">
      <Image
        src="/assets/images/logo.png"
        alt="ao book's logo"
        width={256}
        height={256}
      />
      <Searchbar />
      </div>
    </main>
  );
}
