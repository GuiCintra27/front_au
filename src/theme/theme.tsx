"use client";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { whiteTheme } from "./white-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderStyled theme={whiteTheme}>{children}</ThemeProviderStyled>
  );
}
