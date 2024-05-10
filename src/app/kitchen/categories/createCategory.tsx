"use client";

import { useEffect } from "react";

import { CategoryForm } from "./categoryForm";
import { errorToast } from "@/components/UI/alerts";
import { usePostCategory } from "@/hooks/api/categories";

export default function CreateCategory() {
  const { mutate, error } = usePostCategory();

  useEffect(() => {
    //@ts-expect-error
    const status = error?.cause?.status;

    if (status) {
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 404) errorToast("Categoria não encontrada");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [error]);

  return <CategoryForm mutate={mutate} />;
}
