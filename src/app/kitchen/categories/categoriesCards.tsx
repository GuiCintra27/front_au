"use client";

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
    // @ts-expect-error
    const deleteStatus = deleteError?.cause?.deleteStatus;
    if (deleteStatus) {
      if (deleteStatus === 404) errorToast("Categoria inexistente");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [deleteError]);

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
        {categories &&
          categories?.map(({ image_url: imageUrl, name, id }: Categories) => (
            <CategoryEditCard
              imageUrl={imageUrl}
              name={name}
              categoryId={id}
              mutateDelete={deleteCategory}
              key={id}
            />
          ))}
      </Suspense>
    </div>
  );
}
