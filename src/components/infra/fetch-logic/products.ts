import { UseMutateFunction } from "@tanstack/react-query";

import { ProductData as Products } from "@/models/menuModel";

interface DeleteProps {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  id: string;
}

export function handleDelete({ mutate, id }: DeleteProps) {
  mutate(id);
}

interface CreateProps {
  mutate: UseMutateFunction<Products, Error, Omit<Products, "id">, unknown>;
  data: Omit<Products, "id">;
}

export function handleCreateForm({ mutate, data }: CreateProps) {
  mutate(data);
}

interface UpdateProps {
  mutate: UseMutateFunction<
    {},
    Error,
    { body: Omit<Products, "id">; id: string },
    unknown
  >;
  data: Omit<Products, "id">;
  id: string;
}

export function handleUpdateForm({ mutate, data, id }: UpdateProps) {
  mutate({ body: data, id });
}
