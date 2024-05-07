import { CategoryCard } from "@/components/common/categories/card";
import { Header } from "@/components/common/header";
import { Typograph } from "@/components/common/typograph";

export default function Menu({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const items = [
    {
      imageUrl: "https://content.jwplatform.com/thumbs/GgO0D6jO-720.jpg",
      name: "Combo",
      category_id: 1,
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Kyl6CpoFh_HQm7-3no5sDiQ0mRGLzlU0GGc60U8Z_JAobBGW2KHI8jTedOkWnjqGumA&usqp=CAU",
      name: "Açaí",
      category_id: 2,
    },
  ];
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
          {items.map(({ key, imageUrl, name, category_id }: any) => (
            <CategoryCard
              imageUrl={imageUrl}
              name={name}
              categoryId={category_id}
              key={key}
            />
          ))}
        </div>
      </main>
    </>
  );
}
