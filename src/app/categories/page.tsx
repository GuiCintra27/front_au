"use client";

import { ProductData } from "@/models/menuModel";
import { useGetMenuCategory } from "@/hooks/api/menu";
import { Typograph } from "@/components/common/typograph";
import { ProductCard } from "@/components/common/products/card";

interface CategoriesProps {
  searchParams: { id: string; name: string };
}

function Categories({
  searchParams: { id, name },
}: CategoriesProps): JSX.Element {
  const { data, error } = useGetMenuCategory({ id: id as string });

  if (error) {
    throw error;
  }

  return (
    <>
      <Typograph.Title>{name}</Typograph.Title>
      <Typograph.SectionDescription>
        Veja os item no cardápio de {name.toLowerCase()}
      </Typograph.SectionDescription>
      <div
        style={{
          display: "flex",
          gap: "10rem",
          flexWrap: "wrap",
          fontSize: "2rem",
        }}
      >
        {data?.map((data: ProductData, key) => (
          <ProductCard key={key} {...data} />
        ))}
      </div>
    </>
  );
}

export default Categories;
