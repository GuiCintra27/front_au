import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";

import { Categories } from "@/models/menuModel";
import { errorToast, successToast } from "@/components/UI/alerts";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { fetchDelete } from "@/components/infra/fetch-logic/delete";
import { fetchPost } from "@/components/infra/fetch-logic/fetchPost";
import { fetchUpdate } from "@/components/infra/fetch-logic/fetchupdate";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => await fetchUrl<Categories[]>("/categories"),
    queryKey: ["categories"],
    retry: 3,
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
    onError(error: AxiosError) {
      const status = error?.response?.status;
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
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
    onError(error: AxiosError) {
      const status = error?.response?.status;
      if (status === 404) errorToast("Categoria não encontrada");
      else errorToast("Ocorreu um erro no servidor");
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
    onError(error: AxiosError) {
      const status = error?.response?.status;

      if (status === 404) errorToast("Categoria não encontrada");
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
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
