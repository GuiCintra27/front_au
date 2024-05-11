"use client";

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
  const { mutate: deleteProduct } = useProductsApi.delete();
  const { data: categories, error: categoriesError } = useGetCategories();

  const loadingSizes = {
    $width: "30rem",
    $height: "19rem",
    $border_radius: "1rem",
    $margin_bottom: "2rem",
  };

  useEffect(() => {
    if (categoriesError) {
      errorToast("Ocorreu ao buscar categorias");
    } else if (error) {
      errorToast("Ocorreu um erro no servidor");
    }
  }, [error, categoriesError]);

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
