import { TextareaHTMLAttributes, useEffect, useState } from "react";
import { StyledFormTextArea } from "./style";

type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export default function FormTextArea({
  label,
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
    <StyledFormTextArea>
      <label htmlFor={defaultTextAreaProps.id}>{label}</label>
      <textarea id={defaultTextAreaProps.id} {...defaultTextAreaProps} />

      {defaultTextAreaProps.value !== "" && (
        <span className="characters-count">
          {charactersCount} characters left.
        </span>
      )}
    </StyledFormTextArea>
  );
}
