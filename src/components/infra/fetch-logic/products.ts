import { UseMutateFunction } from "@tanstack/react-query";

import { successToast } from "@/components/UI/alerts";
import { ProductData as Products } from "@/models/menuModel";

export function handleDelete({
  mutate,
  id,
}: {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  id: string;
}) {
  try {
    mutate(id);
    successToast("Categoria excluída com sucesso");
  } catch (error) {}
}

export function handleCreateForm({
  mutate,
  data,
}: {
  mutate: UseMutateFunction<Products, Error, Omit<Products, "id">, unknown>;
  data: Omit<Products, "id">;
}) {
  try {
    mutate(data);
  } catch (error) {}
}

export function handleUpdateForm({
  mutate,
  data,
  id,
}: {
  mutate: UseMutateFunction<
    {},
    Error,
    { body: Omit<Products, "id">; id: string },
    unknown
  >;
  data: Omit<Products, "id">;
  id: string;
}) {
  try {
    mutate({ body: data, id });
    successToast("Categoria criada com sucesso");
  } catch (error) {}
}
