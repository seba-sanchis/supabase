"use server";

export async function getServiceStatus() {
  try {
    const response = await fetch("https://api.ao20.com.ar:2083", {
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error("Error fetching service status:", error);
  }
}
