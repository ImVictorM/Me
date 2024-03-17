import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledAboutSection = styled.section`
  margin-bottom: 2em;
`;

export const StyledAboutInfo = styled.div`
  margin: 2em 0;
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
    h3 {
      color: ${({ theme }) => theme.colors.electricGreen};
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
      white-space: pre-line;
    }
  }

  @media ${device.lg} {
    & .about-content {
      h3 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media ${device.md} {
    display: block;
  }

  @media ${device.sm} {
    & .about-content {
      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
