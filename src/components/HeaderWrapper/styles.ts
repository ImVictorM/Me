import { device } from "@/styles/breakpoints";
import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{
  scrollDirection?: "up" | "down";
  scrollY: number;
}>`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1600px;
  padding: 0 1.5em;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  display: flex;
  width: 100%;
  height: var(--header-height);
  font-size: 1.5rem;
  background-color: rgba(20, 24, 19, 0.9);
  transition: var(--chiang-transition);

  ${({ scrollDirection, scrollY }) =>
    scrollDirection === "up" &&
    scrollY !== 0 &&
    css`
      height: var(--header-scroll-height);
      box-shadow: 0 15px 10px -10px var(--shadow-green-smooth);
    `}

  ${({ scrollDirection }) =>
    scrollDirection === "down" &&
    scrollY !== 0 &&
    css`
      height: var(--header-scroll-height);
      transform: translateY(calc(var(--header-scroll-height) * -1));
    `}

  &:hover {
    opacity: 1;
  }

  @media ${device.sm} {
    justify-content: space-between;
    align-items: center;
  }
`;
