import { Header } from "@/components/common/header";
import { ProductData } from "@/models/menuModel";
import { Typograph } from "@/components/common/typograph";
import { fetchUrl, revalidate } from "@/components/infra/fetch-logic/fetchUrl";

async function Categories({
  searchParams: { categoryId },
}: {
  searchParams: { categoryId: string };
}) {
  const data: ProductData[] = await fetchUrl(`/menu/category/${categoryId}`, {
    next: { revalidate },
  });

  return (
    <>
      <Header />

      <main style={{ width: "75%", margin: "6rem auto" }}>
        <Typograph.Title>Seja bem vindo(a)!</Typograph.Title>
        <Typograph.SectionTitle>Categorização</Typograph.SectionTitle>
        <Typograph.SectionDescription>
          Navegue pelas categorias
        </Typograph.SectionDescription>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "2rem",
          }}
        >
          {data.map(
            ({ image_url: imageUrl, name, description }: ProductData, key) => (
              <div key={key}>
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
}

export default Categories;
