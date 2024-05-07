export async function fetchUrl<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    cache: "force-cache",
    ...options,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from ${url}. Status: ${response.status}`
    );
  }

  return response.json();
}

export const revalidate = 1000 * 60 * 60 * 24; // 24 hours
