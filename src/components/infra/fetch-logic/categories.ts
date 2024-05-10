import { UseMutateFunction } from "@tanstack/react-query";

import { successToast } from "@/components/UI/alerts";
import { Categories } from "@/models/menuModel";

export function handleDelete({
  mutate,
  id,
}: {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  id: string;
}) {
  try {
    mutate(id);
    window.location.reload();
    successToast("Categoria excluída com sucesso");
  } catch (error) {}
}

export function handleCreateForm({
  mutate,
  data,
}: {
  mutate: UseMutateFunction<Categories, Error, Omit<Categories, "id">, unknown>;
  data: Omit<Categories, "id">;
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
    { body: Omit<Categories, "id">; id: string },
    unknown
  >;
  data: Omit<Categories, "id">;
  id: string;
}) {
  try {
    mutate({ body: data, id });
    window.location.reload();
    successToast("Categoria criada com sucesso");
  } catch (error) {}
}
