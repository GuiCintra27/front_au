import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ProductData as Products } from "@/models/menuModel";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { fetchPost } from "@/components/infra/fetch-logic/fetchPost";
import { fetchDelete } from "@/components/infra/fetch-logic/delete";
import { fetchUpdate } from "@/components/infra/fetch-logic/fetchupdate";
import { successToast } from "@/components/UI/alerts";

export function useGetProducts() {
  return useQuery({
    queryFn: async () => await fetchUrl<Products[]>("/products"),
    queryKey: ["products"],
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
  });

  return { mutate, error: failureReason };
}

export function useUpdateProduct(): {
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
