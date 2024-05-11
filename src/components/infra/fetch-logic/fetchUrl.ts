import axios from "axios";

export async function fetchUrl<T>(url: string): Promise<T> {
  const response = await axios.get<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`
  );

  if (response.status !== 200) {
    throw new Error(response.statusText, {
      cause: {
        status: response.status,
      },
    });
  }

  return response.data;
}
