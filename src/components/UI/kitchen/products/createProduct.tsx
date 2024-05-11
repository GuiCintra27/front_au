"use client";

import { useEffect } from "react";

import { ProductForm } from "./productForm";
import { errorToast } from "@/components/UI/alerts";
import { useProductsApi } from "@/hooks/api/products";
import { useGetCategories } from "@/hooks/api/categories";

export default function CreateProduct() {
  const { mutate } = useProductsApi.post();
  const { data: categories, error } = useGetCategories();

  useEffect(() => {
    if (error) {
      errorToast("Ocorreu ao buscar categorias");
    }
  }, [error]);

  return <ProductForm categories={categories} mutate={mutate} />;
}
