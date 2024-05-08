"use client";

import { useEffect } from "react";

import ErrorWrapper from "@/components/common/error";
import { Typograph } from "@/components/common/typograph";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <Typograph.Title>Categoria</Typograph.Title>
      <Typograph.SectionDescription>
        Veja os item no cardápio da categoria
      </Typograph.SectionDescription>
      <ErrorWrapper action={reset} />
    </>
  );
}
