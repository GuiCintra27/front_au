import { Suspense } from "react";

import { Header } from "@/components/common/header";
import { Typograph } from "@/components/common/typograph";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </main>
    </>
  );
}
