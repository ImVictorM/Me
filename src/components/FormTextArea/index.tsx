import { TextareaHTMLAttributes, useEffect, useState } from "react";
import { StyledFormTextArea } from "./style";

type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  errors: string[];
};

export default function FormTextArea({
  label,
  errors,
  ...defaultTextAreaProps
}: FormTextAreaProps) {
  const [charactersCount, setCharactersCount] = useState(
    defaultTextAreaProps.maxLength
  );

  useEffect(() => {
    const maxLen = Number(defaultTextAreaProps.maxLength);
    const charactersTypedCount =
      defaultTextAreaProps.value?.toString().length || 0;

    setCharactersCount(maxLen - charactersTypedCount);
  }, [defaultTextAreaProps.value]);

  return (
    <StyledFormTextArea
      $showCharactersCount={defaultTextAreaProps.value !== ""}
      $showError={errors.length !== 0}
    >
      <label htmlFor={defaultTextAreaProps.id}>{label}</label>
      <textarea id={defaultTextAreaProps.id} {...defaultTextAreaProps} />

      <div>
        <span className="error error-message">{errors[0]}</span>
        <span className="characters-count">
          {charactersCount} characters left.
        </span>
      </div>
    </StyledFormTextArea>
  );
}
