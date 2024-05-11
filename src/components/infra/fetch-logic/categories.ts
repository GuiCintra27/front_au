import { UseMutateFunction } from "@tanstack/react-query";

import { Categories } from "@/models/menuModel";

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
  mutate: UseMutateFunction<Categories, Error, Omit<Categories, "id">, unknown>;
  data: Omit<Categories, "id">;
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
    { body: Omit<Categories, "id">; id: string },
    unknown
  >;
  data: Omit<Categories, "id">;
  id: string;
}) {
  mutate({ body: data, id });
}
