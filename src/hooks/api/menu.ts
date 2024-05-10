import { useQuery } from "@tanstack/react-query";

import { Menu } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";

export function useGetMenu() {
  return useQuery({
    queryFn: async () => fetchUrl<Menu>("/menu"),
    queryKey: ["menu"],
  });
}
