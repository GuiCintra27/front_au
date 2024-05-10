interface FetchPostProps<T> {
  url: string;
  id: string;
  body: Omit<T, "id">;
}
export async function fetchUpdate<T>({
  url,
  body,
  id,
}: FetchPostProps<T>): Promise<{}> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
