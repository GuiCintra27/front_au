import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CreateCategory from "./createCategory";
import { Categories } from "@/models/menuModel";
import CategoriesCards from "./categoriesCards";
import { Header } from "@/components/common/header";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import { Typograph } from "@/components/common/typograph";

export default async function Category() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await fetchUrl<Categories[]>("/categories");
    },
  });

  return (
    <>
      <Header />
      <main style={{ width: "75%", margin: "6rem auto" }}>
        <Typograph.SectionTitle>Categorias</Typograph.SectionTitle>
        <Typograph.SectionDescription>
          Crie uma nova categoria
        </Typograph.SectionDescription>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <CreateCategory />

          <div
            style={{
              marginTop: "6rem",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <Typograph.SectionTitle>
              Veja todas as categorias
            </Typograph.SectionTitle>
            <CategoriesCards />
          </div>
        </HydrationBoundary>
      </main>
    </>
  );
}
