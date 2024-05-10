"use client";

import { useEffect } from "react";
import { AxiosError } from "axios";

import { ProductForm } from "./productForm";
import { errorToast } from "@/components/UI/alerts";
import { useProductsApi } from "@/hooks/api/products";
import { useGetCategories } from "@/hooks/api/categories";

export default function CreateProduct() {
  const { mutate, error } = useProductsApi.post();
  const { data: categories, error: categoriesError } = useGetCategories();

  useEffect(() => {
    let status: number | undefined;

    if (error instanceof AxiosError) {
      status = error?.response?.status;
    } else if (categoriesError instanceof AxiosError) {
      status = categoriesError?.response?.status;
    }

    if (status) {
      if (status === 409) errorToast("Ja existe um produto com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else if (categoriesError) errorToast("Ocorreu ao buscar categorias");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [error, categoriesError]);

  return <ProductForm categories={categories} mutate={mutate} />;
}
