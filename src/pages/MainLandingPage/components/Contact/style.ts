import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledContactPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.electricGreen};
    font-size: 3.5rem;
    margin-bottom: 0.5em;

    @media ${device.sm} {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: center;
    @media ${device.sm} {
      font-size: 1rem;
    }
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 2em 0;

  .personal-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
`;

export const StyledButtonWrapper = styled.div`
  margin: 0 auto;
  width: 60%;

  @media ${device.sm} {
    width: 100%;
  }
`;
