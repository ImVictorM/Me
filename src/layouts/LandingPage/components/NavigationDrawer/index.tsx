import { useEffect, useState } from "react";
import { content } from "@/utils";
import { BoxLink } from "@/components";
import HeaderWrapper from "@/components/HeaderWrapper";
import {
  StyledHamburgerButton,
  StyledLinkList,
  StyledNavigation,
  StyledSevenIcon,
  StyledSidebar,
} from "./style";
import { resume } from "@/assets/files";

export default function NavigationDrawer() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("blur");
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("blur");
    };
  }, []);

  return (
    <HeaderWrapper>
      <StyledSevenIcon>7</StyledSevenIcon>
      <StyledHamburgerButton onClick={toggleMenu} $menuOpen={menuOpen}>
        <div className="hamburger-bar" />
      </StyledHamburgerButton>

      <StyledSidebar $menuOpen={menuOpen}>
        <StyledNavigation>
          <StyledLinkList>
            {content.navigationLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </StyledLinkList>

          <BoxLink to={resume}>RESUME</BoxLink>
        </StyledNavigation>
      </StyledSidebar>
    </HeaderWrapper>
  );
}
