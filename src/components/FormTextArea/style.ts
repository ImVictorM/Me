import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledFormTextArea = styled.div<{ showCharactersCount: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  label {
    font-size: 1.5rem;
    margin-bottom: 0.1em;
    opacity: 0.5;

    @media ${device.sm} {
      font-size: 1rem;
    }
  }

  textarea {
    font-size: 2rem;
    border: none;
    height: 100%;
    text-align: start;
    outline: none;
    background-color: ${({ theme }) => theme.colors.eerieBlack};
    padding: 0.6em 0.4em;
    color: ${({ theme }) => theme.colors.jetStream};
    border-bottom: 2px solid ${({ theme }) => theme.colors.electricGreen + "50"};
    transition: border 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    caret-color: ${({ theme }) => theme.colors.jetStream};

    @media ${device.sm} {
      font-size: 1.2rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.jetStream + "70"};
    }

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.electricGreen};
    }
  }

  .characters-count {
    align-self: flex-end;
    margin-top: 0.3em;
    opacity: 0.2;
    visibility: ${({ showCharactersCount }) =>
      showCharactersCount ? "show" : "hidden"};
  }
`;
