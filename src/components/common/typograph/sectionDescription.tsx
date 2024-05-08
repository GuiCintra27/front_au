"use client";

import styled from "styled-components";

interface SectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  fontSize?: string;
  marginBottom?: string;
}

export function SectionDescription({
  children,
  fontSize,
  marginBottom,
}: SectionDescriptionProps) {
  return (
    <Container $font_size={fontSize} $margin_bottom={marginBottom}>
      {children}
    </Container>
  );
}

const Container = styled.p<{ $font_size?: string; $margin_bottom?: string }>`
  margin-bottom: ${({ $margin_bottom }) => $margin_bottom || "2.1rem"};

  font-size: ${({ $font_size }) => $font_size || "2.1rem"};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};
  word-break: break-word;
`;
