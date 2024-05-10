"use client";

import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 8rem;

  width: 100%;

  display: flex;
  gap: 5rem;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 3.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  h2::after {
    height: 0.4rem;
    width: 0;

    display: block;

    content: "";
    background: ${({ theme }) => theme.colors.secondary.main};
    transition: width 0.3s;
  }

  h2:hover::after {
    width: 100%;
    transition: width 0.3s;
  }

  h2.active {
    color: ${({ theme }) => theme.colors.text.primary} !important;
  }

  h2.active::after {
    width: 100%;

    background: ${({ theme }) => theme.colors.secondary.light};
    transition: width 0.3s;
  }
`;
