"use client";

import { Button } from "@/components/common/button";
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
    <main
      style={{
        width: "100%",
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typograph.Error>...Oops parece que ouve algum erro</Typograph.Error>
      <Button $color="#0b0b0b" onClick={() => reset()}>
        Tentar novamente
      </Button>
    </main>
  );
}
