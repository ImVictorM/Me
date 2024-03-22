import styled from "styled-components";

export const StyledHamburgerButton = styled.button<{ $menuOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;

  .hamburger-bar {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.electricGreen};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({ $menuOpen }) => ($menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${({ $menuOpen }) => ($menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${({ $menuOpen }) =>
        $menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.electricGreen};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${({ $menuOpen }) => ($menuOpen ? `100%` : `120%`)};
      top: ${({ $menuOpen }) => ($menuOpen ? `0` : `-10px`)};
      opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
      transition: ${({ $menuOpen }) =>
        $menuOpen
          ? "top 0.1s ease-out, opacity 0.1s ease-out 0.12s"
          : "top 0.1s ease-in 0.25s, opacity 0.1s ease-in"};
    }
    &:after {
      width: ${({ $menuOpen }) => ($menuOpen ? `100%` : `80%`)};
      bottom: ${({ $menuOpen }) => ($menuOpen ? `0` : `-10px`)};
      transform: rotate(${({ $menuOpen }) => ($menuOpen ? `-90deg` : `0`)});
      transition: ${({ $menuOpen }) =>
        $menuOpen
          ? "bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s"
          : "bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
    }
  }
`;

export const StyledSidebar = styled.aside<{ $menuOpen: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 5em 2.3em;
  width: min(80vw, 400px);
  height: 100vh;
  background-color: #111f11;
  box-shadow: -10px 0px 30px -15px var(--shadow-green-smooth);
  transform: translateX(${({ $menuOpen }) => ($menuOpen ? 0 : 100)}vw);
  transition: var(--chiang-transition);
`;

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: start;
  background-color: inherit;

  & div:last-child {
    width: 50%;
    min-width: 150px;
    align-self: center;
    font-size: 2rem;

    &:hover {
      font-size: 1.9rem;
    }
  }
`;

export const StyledLinkList = styled.ul`
  & li {
    margin: 1.5em 0;
  }

  & li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.jetStream};
    font-size: 2.5rem;
    transition: all 0.4s;

    &:hover {
      color: ${({ theme }) => theme.colors.electricGreen};
    }
  }
`;

export const StyledSevenIcon = styled.span`
  color: ${({ theme }) => theme.colors.electricGreen};
  font-size: 1.9rem;
  cursor: pointer;
`;
