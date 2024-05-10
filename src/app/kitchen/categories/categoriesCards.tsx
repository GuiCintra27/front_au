"use client";

import { Categories } from "@/models/menuModel";
import ErrorWrapper from "@/components/common/error";
import { useGetCategories } from "@/hooks/api/categories";
import { CategoryCard } from "@/components/common/categories/card";
import { Suspense } from "react";
import { SkeletonLoading } from "@/components/common/loading";

export default function CategoriesCards() {
  const { data: categories, error } = useGetCategories();
  const loadingSizes = {
    $width: "30rem",
    $height: "19rem",
    $border_radius: "1rem",
    $margin_bottom: "2rem",
  };

  if (error) {
    return <ErrorWrapper action={() => window.location.reload()} />;
  }

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
            <CategoryCard
              imageUrl={imageUrl}
              name={name}
              categoryId={id}
              key={id}
            />
          ))}
      </Suspense>
    </div>
  );
}
