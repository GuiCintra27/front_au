import { ButtonHTMLAttributes } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Button } from "../button";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function FormButton({ children, ...rest }: FormButtonProps) {
  return (
    <Button $color="#C08D77" $filled={true} {...rest}>
      {rest.disabled ? (
        <ThreeDots
          height="100%"
          width="50"
          radius="10"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        children
      )}
    </Button>
  );
}
