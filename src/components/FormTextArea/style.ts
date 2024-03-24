import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledFormTextArea = styled.div<{
  $showCharactersCount: boolean;
  $showError: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  label {
    font-size: 1.25rem;
    margin-bottom: 0.1em;
    opacity: 0.5;

    @media ${device.md} {
      font-size: 1rem;
    }

    @media ${device.sm} {
      font-size: 0.75rem;
    }
  }

  textarea {
    font-size: 1.5rem;
    border: none;
    height: 100%;
    text-align: start;
    outline: none;
    background-color: ${({ theme }) => theme.colors.eerieBlack};
    padding: 0.6em 0.4em;
    color: ${({ theme }) => theme.colors.jetStream};
    border-bottom: 2px solid ${({ theme }) => theme.colors.electricGreen + "70"};
    transition: border 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    caret-color: ${({ theme }) => theme.colors.jetStream};

    @media ${device.md} {
      font-size: 1.25rem;
    }

    @media ${device.sm} {
      font-size: 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.jetStream + "70"};
    }

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.electricGreen};
    }
  }

  div {
    position: relative;
    margin-top: 0.3em;

    .error-message {
      position: absolute;
      visibility: ${({ $showError }) => ($showError ? "normal" : "hidden")};
      left: 0;
    }

    .characters-count {
      font-size: smaller;
      position: absolute;
      right: 0;
      align-self: flex-end;
      opacity: 0.2;
      visibility: ${({ $showCharactersCount }) =>
        $showCharactersCount ? "show" : "hidden"};
    }
  }
`;
