import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";

import { ProductData as Products } from "@/models/menuModel";
import { errorToast, successToast } from "@/components/UI/alerts";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { fetchDelete } from "@/components/infra/fetch-logic/delete";
import { fetchPost } from "@/components/infra/fetch-logic/fetchPost";
import { fetchUpdate } from "@/components/infra/fetch-logic/fetchupdate";

export function useGetProducts() {
  return useQuery({
    queryFn: async () => await fetchUrl<Products[]>("/products"),
    queryKey: ["products"],
    retry: 3,
  });
}

export function usePostProduct(): {
  mutate: UseMutateFunction<Products, Error, Omit<Products, "id">, unknown>;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn: async (body: Omit<Products, "id">) =>
      await fetchPost<Products>({
        url: "/products",
        body,
      }),
    mutationKey: ["products"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["categoryMenu"],
      });
      successToast("Produto criado com sucesso");
    },
    onError(error: AxiosError) {
      const status = error?.response?.status;
      if (status === 409) errorToast("Ja existe um produto com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    },
  });

  return { mutate, error };
}

export function useDeleteProduct(): {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const { mutate, failureReason } = useMutation({
    mutationFn: async (id: string) =>
      await fetchDelete<{}>({
        url: "/products",
        id,
      }),
    mutationKey: ["products"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["categoryMenu"],
      });
      successToast("Produto excluído com sucesso");
    },
    onError(error: AxiosError) {
      const status = error?.response?.status;
      if (status === 404) errorToast("Produto não encontrado");
      else errorToast("Ocorreu um erro no servidor");
    },
  });

  return { mutate, error: failureReason };
}

export function useUpdateProduct(
  setOpenModal: Dispatch<SetStateAction<boolean>>
): {
  mutate: UseMutateFunction<
    {},
    Error,
    { body: Omit<Products, "id">; id: string },
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
      body: Omit<Products, "id">;
      id: string;
    }) =>
      await fetchUpdate<Products>({
        url: "/products",
        body,
        id,
      }),
    mutationKey: ["products"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["categoryMenu"],
      });
      successToast("Produto atualizado com sucesso");
      setOpenModal(false);
    },
    onError(error: AxiosError) {
      const status = error?.response?.status;

      if (status === 404) errorToast("Produto não encontrado");
      if (status === 409) errorToast("Ja existe um produto com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    },
  });

  return { mutate, error: failureReason };
}

export const useProductsApi = {
  get: useGetProducts,
  post: usePostProduct,
  delete: useDeleteProduct,
  update: useUpdateProduct,
};
