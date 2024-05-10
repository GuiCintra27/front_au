import axios from "axios";

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
  const response = await axios.put<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${url}/${id}`,
    body
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
