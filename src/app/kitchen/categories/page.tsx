"use client";

import { useEffect, useState } from "react";

import { Categories } from "@/models/menuModel";
import { CategoryCard } from "@/components/common/categories/card";
import { fetchUrl, revalidate } from "@/components/infra/fetch-logic/fetchUrl";

export default function Category() {
  const [categories, setCategories] = useState<Categories[]>([]);

  return (
    <>
      <div>sdada</div>
      {categories?.map(({ image_url: imageUrl, name, id }: Categories, key) => (
        <CategoryCard
          imageUrl={imageUrl}
          name={name}
          categoryId={id}
          key={key}
        />
      ))}
    </>
  );
}
