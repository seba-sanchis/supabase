"use server";

import { cookies } from "next/headers";

import { Zone } from "@/types";

export async function setClass(value: string) {
  cookies().set("class", value);
}

export async function setSearch(value: string) {
  cookies().set("search", value.toLocaleLowerCase());
}

export async function setZone(value: Zone) {
  const stringifiedValue = JSON.stringify(value);

  cookies().set("zone", stringifiedValue);
}
