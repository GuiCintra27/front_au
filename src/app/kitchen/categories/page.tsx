import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import Nav from "@/components/UI/kitchen/nav";
import { Categories } from "@/models/menuModel";
import { Typograph } from "@/components/common/typograph";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import CreateCategory from "@/components/UI/kitchen/categories/createCategory";
import CategoriesCards from "@/components/UI/kitchen/categories/categoriesCards";

export default async function Category() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await fetchUrl<Categories[]>("/categories");
    },
  });

  return (
    <main style={{ width: "75%", margin: "6rem auto" }}>
      <Nav page="categories" />
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
  );
}
