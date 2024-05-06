"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem 2.5rem;
  display: flex;

  align-items: center;
  gap: 4rem;

  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.text.white};

  div {
    padding: 0.8rem 1.6rem;

    border-radius: 1rem;
  }

  div:hover,
  .active {
    background-color: ${(props) => props.theme.colors.secondary.dark};
    cursor: pointer;
  }
`;
