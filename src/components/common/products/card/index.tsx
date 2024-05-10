import Image from "next/image";

import { Container, Name, Price } from "./styles";
import { ProductData } from "@/models/menuModel";
import { Typograph } from "../../typograph";

export async function ProductCard({
  name,
  description,
  image_url: imageUrl,
  price,
}: ProductData) {
  return (
    <Container>
      <Image priority src={imageUrl} alt={name} width={350} height={240} />
      <Price>
        <p>R$ {Number(price).toFixed(2).replace(".", ",")}</p>
      </Price>
      <div>
        <Name>{name}</Name>
        <Typograph.SectionDescription fontSize="1.6rem" marginBottom="0">
          {description}
        </Typograph.SectionDescription>
      </div>
    </Container>
  );
}
