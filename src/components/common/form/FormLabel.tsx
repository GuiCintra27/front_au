import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  imagePath?: string;
}

export function FormLabel({ text, imagePath, ...rest }: FormLabelProps) {
  return (
    <Container {...rest}>
      {imagePath && <img src={imagePath} alt={text} />}
      <p>{text}</p>
    </Container>
  );
}

const Container = styled.label`
  margin-bottom: -1rem;

  width: 100%;

  display: flex;
  gap: 1.3rem;

  font-size: 2.2rem;
  font-family: var(--inter);
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.text.primary};

  img {
    width: 2.5rem;
    aspect-ratio: 4/4;

    filter: brightness(var(--brightness)) invert(var(--invert));
  }
`;
