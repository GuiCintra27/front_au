"use client";

import { AxiosError } from "axios";
import { Suspense, useEffect } from "react";

import { errorToast } from "@/components/UI/alerts";
import ErrorWrapper from "@/components/common/error";
import { useProductsApi } from "@/hooks/api/products";
import { useGetCategories } from "@/hooks/api/categories";
import { ProductData as Products } from "@/models/menuModel";
import { SkeletonLoading } from "@/components/common/loading";
import { ProductEditCard } from "@/components/common/products/editCard";

export default function ProductsCards() {
  const { data: products, error } = useProductsApi.get();
  const { error: updateError } = useProductsApi.update();
  const { mutate: deleteProduct, error: deleteError } = useProductsApi.delete();
  const { data: categories, error: categoriesError } = useGetCategories();

  const loadingSizes = {
    $width: "30rem",
    $height: "19rem",
    $border_radius: "1rem",
    $margin_bottom: "2rem",
  };

  if (error) {
    return <ErrorWrapper action={() => window.location.reload()} />;
  }

  useEffect(() => {
    let status: number | undefined;
    if (deleteError instanceof AxiosError) {
      status = deleteError.response?.status;
    } else if (updateError instanceof AxiosError) {
      status = updateError.response?.status;
    } else if (categoriesError instanceof AxiosError) {
      status = categoriesError.response?.status;
    }

    if (status) {
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else if (status === 404) errorToast("Categoria não encontrada");
      else if (categoriesError) errorToast("Ocorreu ao buscar categorias");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [deleteError, updateError, categoriesError]);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <Suspense
        fallback={new Array(8).fill(loadingSizes).map((data, index) => (
          <SkeletonLoading
            key={index}
            {...data}
            style={{
              marginBottom: data.$margin_bottom,
            }}
          />
        ))}
      >
        {products?.map((item: Products) => (
          <ProductEditCard
            categories={categories}
            product={item}
            mutateDelete={deleteProduct}
            key={item.id}
          />
        ))}
      </Suspense>
    </div>
  );
}
