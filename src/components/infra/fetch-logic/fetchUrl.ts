export async function fetchUrl(url: string, options?: RequestInit) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    cache: "force-cache",
    ...options,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
