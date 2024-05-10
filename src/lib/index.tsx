import GlobalStyle from "@/app/globalStyle";
import QueryProvider from "./queryProvider";
import { ThemeProvider } from "@/theme/theme";
import StyledComponentsRegistry from "./styledComponentsRegistry";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </QueryProvider>
  );
}
