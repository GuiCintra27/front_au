"use client";

import styled from "styled-components";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <Container>{children}</Container>;
}

const Container = styled.h1`
  margin-bottom: 3rem;

  font-size: 4.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;
