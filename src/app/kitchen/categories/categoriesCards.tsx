"use client";

import { AxiosError } from "axios";
import { Suspense, useEffect } from "react";

import { Categories } from "@/models/menuModel";
import { errorToast } from "@/components/UI/alerts";
import ErrorWrapper from "@/components/common/error";
import { useCategoriesApi } from "@/hooks/api/categories";
import { SkeletonLoading } from "@/components/common/loading";
import { CategoryEditCard } from "@/components/common/categories/editCard";

export default function CategoriesCards() {
  const { data: categories, error } = useCategoriesApi.get();
  const { mutate: deleteCategory, error: deleteError } =
    useCategoriesApi.delete();
  const { error: updateError } = useCategoriesApi.update();

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
    }

    if (status) {
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else if (status === 404) errorToast("Categoria não encontrada");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [deleteError, updateError]);

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
        {categories?.map((item: Categories) => (
          <CategoryEditCard
            category={item}
            mutateDelete={deleteCategory}
            key={item.id}
          />
        ))}
      </Suspense>
    </div>
  );
}
