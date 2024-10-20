"use server";

import { cookies } from "next/headers";

export async function setClass(value: string) {
  cookies().set("class", value);
}
