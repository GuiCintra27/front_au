"use client";

import { useEffect } from "react";

import { CategoryForm } from "./categoryForm";
import { errorToast } from "@/components/UI/alerts";
import { usePostCategory } from "@/hooks/api/categories";
import { AxiosError } from "axios";

export default function CreateCategory() {
  const { mutate, error } = usePostCategory();

  useEffect(() => {
    if (error instanceof AxiosError) {
      const status = error?.response?.status;

      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [error]);

  return <CategoryForm mutate={mutate} />;
}
