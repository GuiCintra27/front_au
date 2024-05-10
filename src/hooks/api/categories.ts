import { useQuery } from "@tanstack/react-query";

import { Categories } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => fetchUrl<Categories[]>("/categories"),
    queryKey: ["categories"],
  });
}
