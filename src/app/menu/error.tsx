"use client";

import { Typograph } from "@/components/common/typograph";
import { useEffect } from "react";

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
    <main>
      <Typograph.SectionTitle>Ocorreu um erro</Typograph.SectionTitle>
      <button onClick={() => reset()}>Tentar novamente</button>
    </main>
  );
}
