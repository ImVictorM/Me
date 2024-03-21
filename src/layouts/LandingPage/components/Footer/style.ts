import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 70px;
  align-items: center;
  padding: 3em 0 2em 0;
  gap: 0.5em;
  font-size: 1.25rem;

  @media ${device.sm} {
    padding: 1em 0 2em 0;
    font-size: 1rem;
  }

  .social-links {
    ul {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.jetStream};
      transition: var(--chiang-transition);

      &:hover {
        color: ${({ theme }) => theme.colors.electricGreen};
      }
    }
  }

  .credits {
    font-size: 0.75rem;
    opacity: 0.7;
    .heart-icon {
      display: inline-block;
      width: 16px;
      vertical-align: bottom;
    }
  }
`;
