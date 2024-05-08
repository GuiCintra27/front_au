import { Suspense } from "react";

import { Header } from "@/components/common/header";
import { LoadingProductsCard } from "@/components/common/products/loading/loadingCard";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main style={{ width: "75%", margin: "6rem auto" }}>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {new Array(9).fill(0).map((_, index) => (
                <LoadingProductsCard key={index} />
              ))}
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
    </>
  );
}
