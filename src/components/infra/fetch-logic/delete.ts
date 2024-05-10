import axios from "axios";

interface FetchPostProps<T> {
  url: string;
  id: string;
  options?: RequestInit;
}
export async function fetchDelete<T>({
  url,
  id,
}: FetchPostProps<T>): Promise<{}> {
  const response = await axios.delete<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${url}/${id}`
  );

  if (response.status !== 204) {
    throw new Error(response.statusText, {
      cause: {
        status: response.status,
      },
    });
  }

  return {};
}
