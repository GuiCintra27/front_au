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
  mutate(id);
}

export function handleCreateForm({
  mutate,
  data,
}: {
  mutate: UseMutateFunction<Products, Error, Omit<Products, "id">, unknown>;
  data: Omit<Products, "id">;
}) {
  mutate(data);
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
  mutate({ body: data, id });
}
