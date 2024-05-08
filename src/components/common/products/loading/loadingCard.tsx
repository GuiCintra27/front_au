import { Container } from "../card/styles";
import { SkeletonLoading } from "@/components/common/loading";

export const LoadingProductsCard = () => {
  return (
    <Container>
      <SkeletonLoading $height="24rem" $width="100%" $border_radius="0.6rem" />
      <SkeletonLoading $height="2.8rem" $width="9rem" $border_radius="0.6rem" />
      <SkeletonLoading $height="4rem" $width="100%" $border_radius="0.6rem" />
      <SkeletonLoading $height="8rem" $width="100%" $border_radius="0.6rem" />
    </Container>
  );
};
