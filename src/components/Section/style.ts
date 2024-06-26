import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 4em 0;
`;

export const StyledSectionTitle = styled.h2`
  margin: 2em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  gap: 0.4em;
  white-space: nowrap;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: var(--line-width);
    background-color: ${({ theme }) => theme.colors.electricGreen};

    @media ${device.sm} {
      flex-grow: 1;
    }
  }

  @media ${device.md} {
    font-size: 1.5rem;
  }

  @media ${device.sm} {
    font-size: 1rem;
  }
`;
