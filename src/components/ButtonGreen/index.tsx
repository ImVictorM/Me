import { ButtonHTMLAttributes } from "react";
import { StyledGreenButton } from "./style";

type ButtonGreenProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

export default function ButtonGreen({
  children,
  ...defaultButtonProps
}: ButtonGreenProps) {
  return (
    <StyledGreenButton {...defaultButtonProps}>{children}</StyledGreenButton>
  );
}
