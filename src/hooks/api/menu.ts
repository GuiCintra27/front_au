import { useQuery } from "@tanstack/react-query";

import { Menu, ProductData } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";

export function useGetMenu() {
  return useQuery({
    queryFn: async () => fetchUrl<Menu>("/menu"),
    queryKey: ["menu"],
  });
}

export function useGetMenuCategory({ id }: { id: string }) {
  return useQuery({
    queryFn: async () => fetchUrl<ProductData[]>(`/menu/category/${id}`),
    queryKey: ["categoryMenu", id],
  });
}
