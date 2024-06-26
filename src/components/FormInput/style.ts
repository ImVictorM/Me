import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledFormInput = styled.div<{ $showError: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

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

  input {
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

    &:-webkit-autofill,
    &:autofill {
      -webkit-background-clip: text;
      -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.eerieBlack}
        inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.jetStream};
      caret-color: ${({ theme }) => theme.colors.jetStream};
    }
  }

  span {
    margin-top: 0.3em;
    visibility: ${({ $showError }) => ($showError ? "normal" : "hidden")};
  }
`;
