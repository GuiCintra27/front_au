"use client";

import Link from "next/link";
import { Container } from "./styles";

export function NavBar() {
  const pages = {
    Cardápio: "/menu",
    Cozinha: "/kitchen",
    Pedidos: "",
    Retirada: "",
  };

  const actualPage = window.location.pathname;

  function alert() {
    window.alert("Recurso em desenvolvimento");
  }

  return (
    <Container>
      {Object.keys(pages).map((page, index) =>
        page === "Pedidos" || page === "Retirada" ? (
          <div
            key={index}
            onClick={alert}
            className={actualPage === pages[page] ? "active" : ""}
          >
            {page}
          </div>
        ) : (
          <div
            key={index}
            className={actualPage === pages[page] ? "active" : ""}
          >
            {/* @ts-expect-error */}
            <Link href={pages[page]}>{page}</Link>
          </div>
        )
      )}
    </Container>
  );
}
