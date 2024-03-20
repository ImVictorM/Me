import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledGreenButton = styled.button`
  background-color: ${({ theme }) => theme.colors.electricGreen};
  width: 100%;
  font-size: 2rem;
  padding: 0.5em 1em;
  border-radius: 4px;

  @media ${device.sm} {
    font-size: 1.5rem;
  }
`;
