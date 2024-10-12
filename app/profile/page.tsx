import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return <p>Hello {data.user.email}</p>;
}
