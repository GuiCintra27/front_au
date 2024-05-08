import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  $color: string;
  $filled?: boolean;
}

export function Button({ children, $color, $filled = false }: ButtonProps) {
  return (
    <Container $color={$color} $filled={$filled}>
      {children}
    </Container>
  );
}
