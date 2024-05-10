import axios from "axios";

interface FetchPostProps<T> {
  url: string;
  body: Omit<T, "id">;
}
export async function fetchPost<T>({
  url,
  body,
}: FetchPostProps<T>): Promise<T> {
  const response = await axios.post<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    body
  );
  if (response.status !== 201) {
    throw new Error(response.statusText, {
      cause: {
        status: response.status,
      },
    });
  }

  return response.data;
}
