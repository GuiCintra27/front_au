import { Suspense } from "react";

import { Header } from "@/components/common/header";
import { Typograph } from "@/components/common/typograph";
import { SkeletonLoading } from "@/components/common/loading";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loadingSizes = {
    $width: "30rem",
    $height: "19rem",
    $border_radius: "1rem",
    $margin_bottom: "2rem",
  };

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
          <Suspense
            fallback={new Array(8).fill(loadingSizes).map((data, index) => (
              <SkeletonLoading
                key={index}
                {...data}
                style={{
                  marginBottom: data.$margin_bottom,
                }}
              />
            ))}
          >
            {children}
          </Suspense>
        </div>
      </main>
    </>
  );
}
