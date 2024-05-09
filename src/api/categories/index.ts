import { Categories } from "@/models/menuModel";
import { useQuery } from "@tanstack/react-query";

export function useCategoriesApi() {
  // const { data: categoriesData, error: categoriesError } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const result = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/categories`
  //     );
  //     if (!result.ok) {
  //       return {
  //         error: true,
  //         message: "Error fetching categories data",
  //       };
  //     }
  //     return await result.json();
  //   },
  // });
  // return { categoriesData, categoriesError };
}
