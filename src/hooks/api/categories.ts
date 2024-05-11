import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

import { Categories } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { fetchPost } from "@/components/infra/fetch-logic/fetchPost";
import { fetchDelete } from "@/components/infra/fetch-logic/delete";
import { fetchUpdate } from "@/components/infra/fetch-logic/fetchupdate";
import { successToast } from "@/components/UI/alerts";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => await fetchUrl<Categories[]>("/categories"),
    queryKey: ["categories"],
  });
}

export function usePostCategory(): {
  mutate: UseMutateFunction<Categories, Error, Omit<Categories, "id">, unknown>;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn: async (body: Omit<Categories, "id">) =>
      await fetchPost<Categories>({
        url: "/categories",
        body,
      }),
    mutationKey: ["categories"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
      successToast("Categoria criada com sucesso");
    },
  });

  return { mutate, error };
}

export function useDeleteCategory(): {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, failureReason } = useMutation({
    mutationFn: async (id: string) =>
      await fetchDelete<{}>({
        url: "/categories",
        id,
      }),
    mutationKey: ["categories"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
      successToast("Categoria excluída com sucesso");
    },
  });

  return { mutate, error: failureReason };
}

export function useUpdateCategory(
  setOpenModal: Dispatch<SetStateAction<boolean>>
): {
  mutate: UseMutateFunction<
    {},
    Error,
    { body: Omit<Categories, "id">; id: string },
    unknown
  >;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, failureReason } = useMutation({
    mutationFn: async ({
      body,
      id,
    }: {
      body: Omit<Categories, "id">;
      id: string;
    }) =>
      await fetchUpdate<Categories>({
        url: "/categories",
        body,
        id,
      }),
    mutationKey: ["categories"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
      successToast("Categoria atualizada com sucesso");
      setOpenModal(false);
    },
  });

  return { mutate, error: failureReason };
}

export const useCategoriesApi = {
  get: useGetCategories,
  post: usePostCategory,
  delete: useDeleteCategory,
  update: useUpdateCategory,
};
