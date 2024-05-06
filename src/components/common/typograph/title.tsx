"use client";

import styled from "styled-components";

export function Title({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.h1`
  margin-bottom: 3rem;

  font-size: 4.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;
