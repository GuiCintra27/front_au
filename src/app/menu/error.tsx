"use client";

import { useEffect } from "react";

import ErrorWrapper from "@/components/common/error";

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
  return <ErrorWrapper action={reset} />;
}
