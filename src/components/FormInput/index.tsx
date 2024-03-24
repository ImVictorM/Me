import { StyledFormInput } from "./style";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors: string[];
};

export default function FormInput({
  label,
  errors,
  ...defaultInputProps
}: FormInputProps) {
  return (
    <StyledFormInput $showError={errors.length !== 0}>
      <label htmlFor={defaultInputProps.id}>{label}</label>
      <input {...defaultInputProps} />
      <span className="error">{errors[0]}</span>
    </StyledFormInput>
  );
}
