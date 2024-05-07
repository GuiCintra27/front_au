import { Header } from "@/components/common/header";
import { Categories, Menu } from "@/models/menuModel";
import { Typograph } from "@/components/common/typograph";
import { CategoryCard } from "@/components/common/categories/card";
import { fetchUrl, revalidate } from "@/components/infra/fetch-logic/fetchUrl";

export default async function Menu({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { categories }: Menu = await fetchUrl("/menu", {
    next: { revalidate, tags: ["menu"] },
  });
  return (
    <>
      <Header />
      <main style={{ width: "75%", margin: "6rem auto" }}>
        <Typograph.Title>Seja bem vindo(a)!</Typograph.Title>
        <Typograph.SectionTitle>Cardápio</Typograph.SectionTitle>
        <Typograph.SectionDescription>
          Navegue pelas categorias
        </Typograph.SectionDescription>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map(
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
      </main>
    </>
  );
}
