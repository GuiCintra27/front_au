"use client";

import styled from "styled-components";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.h2`
  margin-bottom: 1rem;

  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;
