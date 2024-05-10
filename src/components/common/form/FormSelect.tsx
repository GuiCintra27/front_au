import { styled } from "styled-components";
import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  defaultOption: string;
  optionsList: { value: string; text: string }[];
}

export function FormSelect({
  name,
  defaultOption,
  optionsList,
  ...rest
}: FormSelectProps) {
  const { register } = useFormContext();
  return (
    <Select {...register(name)} {...rest}>
      <option value="" disabled={true}>
        {defaultOption}
      </option>

      {optionsList.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  width: 100%;
  height: 5rem;

  padding: 0.5rem;

  border-radius: 1rem;
  border: 2px solid ${({ theme: { colors } }) => colors.stroke.secondary};

  font-size: 2.2rem;
  font-family: var(--inter);
  color: ${({ theme: { colors } }) => colors.text.primary};

  &::placeholder {
    font-size: 2.2rem;
    font-family: var(--inter);
    color: ${({ theme: { colors } }) => colors.text.secondary};
  }
`;
