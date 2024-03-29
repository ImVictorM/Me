import { ButtonHTMLAttributes } from "react";
import { LoadingDot, StyledGreenButton } from "./style";

type ButtonGreenProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isLoading: boolean;
  loadingText: string;
};

export default function ButtonGreen({
  children,
  isLoading,
  loadingText,
  ...defaultButtonProps
}: ButtonGreenProps) {
  return (
    <StyledGreenButton {...defaultButtonProps}>
      {isLoading ? (
        <div className="loading-wrapper">
          <span className="loading-text">{loadingText || "LOADING"}</span>
          <div>
            <LoadingDot animationDelay="0.1s" />
            <LoadingDot animationDelay="0.2s" />
            <LoadingDot animationDelay="0.3s" />
          </div>
        </div>
      ) : (
        children
      )}
    </StyledGreenButton>
  );
}
