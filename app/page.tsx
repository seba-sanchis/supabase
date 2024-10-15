import { Searchbar } from "@/components";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Searchbar />
    </main>
  );
}
