import Link from "next/link";
import { Container } from "./styles";

interface CategoryCardProps {
  imageUrl: string;
  name: string;
  categoryId: string;
}

export function CategoryCard({
  imageUrl,
  name,
  categoryId,
}: CategoryCardProps) {
  return (
    <Container $image_url={imageUrl}>
      <Link href={`/categories?id=${categoryId}&name=${name}`}>
        <p>{name}</p>
      </Link>
    </Container>
  );
}
