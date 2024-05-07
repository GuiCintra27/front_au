import Link from "next/link";
import { Container } from "./styles";

export async function CategoryCard({
  imageUrl,
  name,
  categoryId,
}: {
  imageUrl: string;
  name: string;
  categoryId: number;
}) {
  return (
    <Container $image_url={imageUrl}>
      <Link href={`/categories?categoryId=${categoryId}`}>
        <p>{name}</p>
      </Link>
    </Container>
  );
}
