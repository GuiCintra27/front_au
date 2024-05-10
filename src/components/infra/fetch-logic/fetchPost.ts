import { revalidateTag } from "next/cache";

interface FetchPostProps<T> {
  url: string;
  body: Omit<T, "id">;
  tag?: string;
  options?: RequestInit;
}
export async function fetchPost<T>({
  url,
  body,
  tag,
  options,
}: FetchPostProps<T>): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(response.statusText, {
      cause: {
        status: response.status,
      },
    });
  }

  if (tag) revalidateTag(tag);
  return await response.json();
}

export const revalidate = 1000 * 60; // 1 hour
