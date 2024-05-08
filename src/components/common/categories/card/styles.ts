"use client";

import styled from "styled-components";

export const Container = styled.div<{ $image_url: string }>`
  margin-bottom: 2rem;

  height: 19rem;
  width: 30rem;

  background-image: ${({ $image_url }) => `url(${$image_url})`};
  background-size: cover;
  background-position: center;

  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.white};
  word-break: break-word;

  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0px -120px 50px -60px inset;
  cursor: pointer;

  transition: font-size 0.5s, color 0.5s;

  a {
    width: 100%;
    height: 100%;

    padding-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  &:hover {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.secondary.light};
    transition: 0.5s;
  }
`;
