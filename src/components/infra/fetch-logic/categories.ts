import { UseMutateFunction } from "@tanstack/react-query";

import { Categories } from "@/models/menuModel";

interface DeleteProps {
  mutate: UseMutateFunction<{}, Error, string, unknown>;
  id: string;
}

export function handleDelete({ mutate, id }: DeleteProps) {
  mutate(id);
}

interface CreateProps {
  mutate: UseMutateFunction<Categories, Error, Omit<Categories, "id">, unknown>;
  data: Omit<Categories, "id">;
}

export function handleCreateForm({ mutate, data }: CreateProps) {
  mutate(data);
}

interface UpdateProps {
  mutate: UseMutateFunction<
    {},
    Error,
    { body: Omit<Categories, "id">; id: string },
    unknown
  >;
  data: Omit<Categories, "id">;
  id: string;
}

export function handleUpdateForm({ mutate, data, id }: UpdateProps) {
  mutate({ body: data, id });
}
