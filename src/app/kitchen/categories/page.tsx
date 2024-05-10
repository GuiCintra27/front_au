import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Categories } from "@/models/menuModel";
import { Header } from "@/components/common/header";
import { fetchUrl } from "@/components/infra/fetch-logic/fetchUrl";
import CategoryForm from "./categoryForm";
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
        <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
      </main>
    </>
  );
}
