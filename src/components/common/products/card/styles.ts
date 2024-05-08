"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 38.5rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;

  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  background: ${({ theme }) => theme.colors.primary};

  img {
    border-radius: 0.6rem;
    background: lightgray 50% / cover no-repeat;
  }
`;

export const Price = styled.div`
  padding: 0.4rem 1rem;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.6rem;
  background-color: ${({ theme: { colors } }) => colors.secondary.main}
    opacity(0.1);

  p {
    color: #32ad1e;
    font-family: var(--inter);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
  }
`;

export const Name = styled.h4`
  margin-bottom: 1rem;

  font-family: var(--inter);
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.8rem;
`;
