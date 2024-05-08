"use client";

import styled from "styled-components";

export const SkeletonLoading = styled.div<{
  $height: string;
  $width: string;
  $border_radius: string;
}>`
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  border-radius: ${({ $border_radius }) => $border_radius};
  background-size: 400%;
  background-image: linear-gradient(
    to right,
    #f2f2f2 0%,
    #f2f2f2 30%,
    #d9d9d9 45%,
    #d9d9d9 50%,
    #f2f2f2 60%,
    #f2f2f2 100%
  );

  animation: shimmer 1s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;
