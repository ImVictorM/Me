import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledContactPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.3;
    text-align: center;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 2em 0;

  .personal-info {
    display: flex;
    gap: 1em;
    @media ${device.md} {
      flex-wrap: wrap;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  margin: 0 auto;
  width: 60%;

  @media ${device.sm} {
    width: 100%;
  }
`;
