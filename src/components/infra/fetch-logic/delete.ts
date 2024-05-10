import { revalidateTag } from "next/cache";

interface FetchPostProps<T> {
  url: string;
  id: string;
  options?: RequestInit;
}
export async function fetchDelete<T>({
  url,
  id,
  options,
}: FetchPostProps<T>): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}/${id}`,
    {
      ...options,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText, {
      cause: {
        status: response.status,
      },
    });
  }

  return await response.json();
}
