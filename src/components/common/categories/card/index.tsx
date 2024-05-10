import Link from "next/link";
import { Container } from "./styles";

export function CategoryCard({
  imageUrl,
  name,
  categoryId,
}: {
  imageUrl: string;
  name: string;
  categoryId: string;
}) {
  return (
    <Container $image_url={imageUrl}>
      <Link href={`/categories?id=${categoryId}&name=${name}`}>
        <p>{name}</p>
      </Link>
    </Container>
  );
}
