import { loadingDotAnimation } from "@/styles/animations";
import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledGreenButton = styled.button`
  background-color: ${({ theme }) => theme.colors.electricGreen};
  width: 100%;
  font-size: 1.875rem;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.chineseBlack};
  transition: var(--chiang-transition);

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.electricGreen + "70"};
    color: ${({ theme }) => theme.colors.chineseBlack + "70"};
  }

  @media ${device.md} {
    font-size: 1.375rem;
  }

  @media ${device.sm} {
    font-size: 1rem;
  }

  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .loading-text {
      margin-right: 2px;
    }
  }
`;

export const LoadingDot = styled.span<{ animationDelay?: string }>`
  display: inline-block;
  width: 5px;
  border-radius: 100%;
  height: 5px;
  margin: 0 1px;
  background-color: ${({ theme }) => theme.colors.chineseBlack + "70"};
  ${({ animationDelay }) => loadingDotAnimation(animationDelay)}
`;
