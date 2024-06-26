import { LabelHTMLAttributes, ReactNode, useRef } from "react";

interface FormImageLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  children: ReactNode;
}

export function FormImageLabel({
  name,
  children,
  ...rest
}: FormImageLabelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  return (
    <label htmlFor={name} onClick={handleClick} {...rest}>
      {children}
    </label>
  );
}
