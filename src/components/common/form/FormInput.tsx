import { styled } from "styled-components";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function FormInput({ name, ...rest }: FormInputProps) {
  const { register } = useFormContext();
  return <Input {...register(name)} {...rest} />;
}

const Input = styled.input`
  width: 100%;
  height: 5rem;

  padding: 1rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme: { colors } }) => colors.stroke.secondary};

  font-size: 2.2rem;
  font-family: var(--inter);

  &::placeholder {
    font-size: 2.2rem;
    font-family: var(--inter);
    color: ${({ theme: { colors } }) => colors.text.secondary};
  }
`;
