import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledSectionTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  gap: 0.4em;

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

  @media ${device.sm} {
    font-size: 1.5rem;
  }
`;
