import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { Categories } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { fetchPost } from "@/components/infra/fetch-logic/fetchPost";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => fetchUrl<Categories[]>("/categories"),
    queryKey: ["categories"],
  });
}

export function usePostCategory(): {
  mutate: UseMutateFunction<Categories, Error, Omit<Categories, "id">, unknown>;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, failureReason } = useMutation({
    mutationFn: async (body: Omit<Categories, "id">) =>
      fetchPost<Categories>({
        url: "/categories",
        body,
        tag: "categories",
      }),
    mutationKey: ["categories"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
    },
  });

  return { mutate, error: failureReason };
}

export const useCategoriesApi = {
  get: useGetCategories,
  post: usePostCategory,
};
