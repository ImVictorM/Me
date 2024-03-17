import { useEffect, useState } from "react";
import { content } from "@/utils";
import { Link } from "react-router-dom";
import { ResumeLink } from "@/components";
import HeaderWrapper from "@/components/HeaderWrapper";
import {
  StyledHamburgerButton,
  StyledLinkList,
  StyledNavigation,
  StyledSevenIcon,
  StyledSidebar,
} from "./style";

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
      <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen}>
        <div className="hamburger-bar" />
      </StyledHamburgerButton>

      <StyledSidebar menuOpen={menuOpen}>
        <StyledNavigation>
          <StyledLinkList>
            {content.navigationLinks.map((link) => (
              <li key={link.url}>
                <Link to={link.url} onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </StyledLinkList>

          <ResumeLink />
        </StyledNavigation>
      </StyledSidebar>
    </HeaderWrapper>
  );
}
