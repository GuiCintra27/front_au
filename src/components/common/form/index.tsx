"use client";

import { FormRoot } from "./FormRoot";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormButton } from "./FormButton";
import { FormSelect } from "./FormSelect";
import { FormErrorMessage } from "./FormErrorMessage";
import { FormImageLabel } from "./FormImageLabel";

export const Form = {
  Root: FormRoot,
  Label: FormLabel,
  ImageLabel: FormImageLabel,
  Input: FormInput,
  Select: FormSelect,
  Error: FormErrorMessage,
  Button: FormButton,
};
