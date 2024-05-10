import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { Menu } from "@/models/menuModel";
import { Header } from "@/components/common/header";
import { Typograph } from "@/components/common/typograph";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await fetchUrl<Menu>("/menu");
    },
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
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
          </HydrationBoundary>
        </div>
      </main>
    </>
  );
}
