"use server";

import { cookies } from "next/headers";

export async function setSpell(value: string) {
  cookies().set("spell", value);
}
