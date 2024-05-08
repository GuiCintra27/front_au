import { ProductData } from "@/models/menuModel";
import { Typograph } from "@/components/common/typograph";
import { fetchUrl, revalidate } from "@/components/infra/fetch-logic/fetchUrl";
import { ProductCard } from "@/components/common/products/card";

async function Categories({
  searchParams: { id, name },
}: {
  searchParams: { id: string; name: string };
}) {
  const data: ProductData[] = await fetchUrl(`/menu/category/${id}`, {
    next: { revalidate },
  });

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
        {data.map((data: ProductData, key) => (
          <ProductCard key={key} {...data} />
        ))}
      </div>
    </>
  );
}

export default Categories;
