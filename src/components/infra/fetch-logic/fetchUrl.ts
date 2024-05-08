export async function fetchUrl<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return await response.json();
}

export const revalidate = 1000 * 60; // 1 hour
