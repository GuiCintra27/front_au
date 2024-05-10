"use client";

import { Suspense } from "react";

import { useGetMenu } from "@/hooks/api/menu";
import ErrorWrapper from "@/components/common/error";
import { Categories, Menu as MenuModel } from "@/models/menuModel";
import { CategoryCard } from "@/components/common/categories/card";
import { SkeletonLoading } from "@/components/common/loading";

export default function Menu() {
  const { data, error } = useGetMenu();

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
        {Array.isArray(data?.categories) &&
          data?.categories?.map(
            ({ image_url: imageUrl, name, id }: Categories, key) => (
              <CategoryCard
                imageUrl={imageUrl}
                name={name}
                categoryId={id}
                key={key}
              />
            )
          )}
      </Suspense>
    </div>
  );
}
