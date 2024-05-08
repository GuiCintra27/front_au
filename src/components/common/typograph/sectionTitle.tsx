"use client";

import styled from "styled-components";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <Container>{children}</Container>;
}

const Container = styled.h2`
  margin-bottom: 1rem;

  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;
