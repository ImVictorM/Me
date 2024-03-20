import { InputHTMLAttributes } from "react";
import { StyledFormInput } from "./style";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function FormInput({
  label,
  ...defaultInputProps
}: FormInputProps) {
  return (
    <StyledFormInput>
      <label htmlFor={defaultInputProps.id}>{label}</label>
      <input {...defaultInputProps} />
    </StyledFormInput>
  );
}
