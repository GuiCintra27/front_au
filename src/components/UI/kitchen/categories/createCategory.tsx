"use client";

import { CategoryForm } from "./categoryForm";
import { usePostCategory } from "@/hooks/api/categories";

export default function CreateCategory() {
  const { mutate } = usePostCategory();

  return <CategoryForm mutate={mutate} />;
}
