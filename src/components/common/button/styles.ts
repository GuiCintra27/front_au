import styled from "styled-components";

export const Container = styled.button<{ $color: string; $filled: boolean }>`
  height: 5.6rem;
  width: fit-content;
  min-width: 35rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  padding: 0.8rem 1.6rem;

  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${({ theme: { colors }, $filled, $color }) =>
    $filled ? colors.text.white : $color};

  border-radius: 1.5rem;
  background-color: ${({ $filled, $color }) => ($filled ? $color : "none")};
  border: solid 1px
    ${({ $filled, $color }) => ($filled ? "transparent" : $color)};
  cursor: pointer;
`;
