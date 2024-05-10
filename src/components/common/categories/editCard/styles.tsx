"use client";

import styled from "styled-components";

export const Container = styled.div<{ $image_url: string }>`
  position: relative;

  margin-bottom: 2rem;
  padding-inline: 2rem;

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

  #options {
    position: absolute;

    right: 1rem;
    top: 1rem;

    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  aside {
    position: absolute;

    padding: 0.5rem 0.8rem;

    right: 4rem;
    top: 1rem;

    width: 11rem;
    height: 11rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    p {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.5rem;
      font-weight: 400;

      cursor: pointer;

      :hover {
        background-color: #efefef;
      }
    }

    .separator {
      width: 100%;
      height: 1px;
      background-color: #0b0b0b;
    }
  }

  p {
    width: 100%;
    height: 100%;

    padding-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;
