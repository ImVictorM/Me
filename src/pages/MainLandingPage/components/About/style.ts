import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledAboutInfo = styled.div`
  display: flex;
  align-items: center;

  & .about-image {
    float: left;
    max-width: 40%;
    background-color: ${({ theme }) => theme.colors.eerieBlack};
    padding: 1em 0;
    max-height: 100%;
    margin: 0 1em 0.5em 0;
  }

  & .about-content {
    p {
      white-space: pre-line;
    }
  }

  @media ${device.md} {
    display: block;
  }
`;
