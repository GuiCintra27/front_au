"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  padding: 2.2rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondary.main};

  h3 {
    color: ${({ theme }) => theme.colors.text.white};

    font-size: 2.8rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;
