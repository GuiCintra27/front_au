import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import CreateCategory from "./createProduct";
import CategoriesCards from "./productsCards";
import Nav from "@/components/UI/kitchen/nav";
import { ProductData } from "@/models/menuModel";
import { Typograph } from "@/components/common/typograph";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";

export default async function Product() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await fetchUrl<ProductData[]>("/products");
    },
  });

  return (
    <main style={{ width: "75%", margin: "6rem auto" }}>
      <Nav page="products" />
      <Typograph.SectionTitle>Produtos</Typograph.SectionTitle>
      <Typograph.SectionDescription>
        Crie um novo item
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
            Veja todos os produtos
          </Typograph.SectionTitle>
          <CategoriesCards />
        </div>
      </HydrationBoundary>
    </main>
  );
}
