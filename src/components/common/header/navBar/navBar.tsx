"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./styles";

export function NavBar() {
  const pages = [
    {
      page: "/menu",
      key: "menu",
      text: "Cardápio",
    },
    {
      page: "/kitchen/categories",
      key: "kitchen",
      text: "Cozinha",
    },
    {
      page: "/orders",
      key: "orders",
      text: "Pedidos",
    },
    {
      page: "/orders",
      key: "orders",
      text: "Retirada",
    },
  ];

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
      {pages.map(({ page: url, key, text }) =>
        text === "Pedidos" || text === "Retirada" ? (
          <div key={key} onClick={alert}>
            {text}
          </div>
        ) : (
          <Link key={key} href={url}>
            <div className={url.includes(actualPage) ? "active" : ""}>
              {text}
            </div>
          </Link>
        )
      )}
    </Container>
  );
}
