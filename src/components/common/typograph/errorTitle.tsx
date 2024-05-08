"use client";

import React from "react";
import styled from "styled-components";

interface ErrorTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function ErrorTitle({ children }: ErrorTitleProps) {
  return <Container>{children}</Container>;
}

const Container = styled.h2`
  margin-bottom: 1rem;

  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
