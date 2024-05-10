"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./styles";

export function NavBar() {
  const pages = {
    Cardápio: "/menu",
    Cozinha: "/kitchen/categories",
    Pedidos: "",
    Retirada: "",
  };

  const [actualPage, setActualPage] = useState<string>("");

  useEffect(() => {
    let page = window.location.pathname;

    if (page === "/categories") page = "/menu";

    setActualPage(page);
  }, []);

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
            className={pages[page].includes(actualPage) ? "active" : ""}
          >
            {page}
          </div>
        ) : (
          // @ts-expect-error
          <Link href={pages[page]}>
            <div
              key={index}
              // @ts-expect-error
              className={pages[page].includes(actualPage) ? "active" : ""}
            >
              {page}
            </div>
          </Link>
        )
      )}
    </Container>
  );
}
