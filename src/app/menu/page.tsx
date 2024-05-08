import { Categories, Menu as MenuModel } from "@/models/menuModel";
import { CategoryCard } from "@/components/common/categories/card";
import { fetchUrl, revalidate } from "@/components/infra/fetch-logic/fetchUrl";

export default async function Menu() {
  const data = await fetchUrl<MenuModel>("/menu", {
    next: { revalidate, tags: ["menu"] },
  });

  if (1 + 1 === 2) {
    throw new Error("Error");
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {data?.categories?.map(
        ({ image_url: imageUrl, name, id }: Categories, key) => (
          <CategoryCard
            imageUrl={imageUrl}
            name={name}
            categoryId={id}
            key={key}
          />
        )
      )}
    </div>
  );
}
