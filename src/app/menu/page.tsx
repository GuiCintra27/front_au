import { Header } from "@/components/common/header";
import { Typograph } from "@/components/common/typograph";

export default function Menu({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return (
    <>
      <Header />
      <main style={{ width: "75%", margin: "6rem auto" }}>
        <Typograph.Title>Seja bem vindo(a)!</Typograph.Title>
        <Typograph.SectionTitle>Cardápio</Typograph.SectionTitle>
        <Typograph.SectionDescription>
          Navegue pelas categorias
        </Typograph.SectionDescription>
      </main>
    </>
  );
}
