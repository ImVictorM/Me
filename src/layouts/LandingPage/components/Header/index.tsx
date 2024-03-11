import { NavigationLink } from "@/components";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 78px;
`;

const HeaderLine = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.electricGreen};
  flex-grow: 1;
  height: auto;
`;

const StyledNav = styled.nav`
  height: auto;
  display: flex;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLine />
      <StyledNav>
        <NavigationLink defaultActive to="#home" text="HOME" />
        <NavigationLink to="#about" text="ABOUT" />
        <NavigationLink to="#projects" text="PROJECTS" />
        <NavigationLink to="#contact" text="CONTACT" />
      </StyledNav>

      <button style={{ background: "red" }}>RESUME</button>
    </StyledHeader>
  );
}
