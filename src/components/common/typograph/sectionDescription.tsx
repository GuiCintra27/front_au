"use client";

import styled from "styled-components";

export function SectionDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}

const Container = styled.p`
  margin-bottom: 1rem;

  font-size: 2.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};
`;
