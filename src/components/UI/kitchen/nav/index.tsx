import Link from "next/link";

import { Container } from "./styles";

export default function Nav({ page }: { page: string }) {
  return (
    <Container>
      <Link href="/kitchen/categories">
        <h2 className={page === "categories" ? "active" : ""}>Categorias</h2>
      </Link>
      <Link href="/kitchen/products">
        <h2 className={page === "products" ? "active" : ""}>Produtos</h2>
      </Link>
    </Container>
  );
}
