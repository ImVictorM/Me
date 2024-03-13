import { NavigationLink, ResumeLink } from "@/components";
import { device } from "@/styles/breakpoints";
import styled from "styled-components";
import { content } from "@/utils";

const StyledHeader = styled.header`
  margin-top: 2em;
  display: flex;
  width: 100%;
  height: 78px;
  font-size: 2rem;

  @media (${device.md}) {
    font-size: 1.5rem;
    height: 60px;
  }
`;

const HeaderLine = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.electricGreen};
  flex-grow: 1;
  height: auto;
`;

const StyledNav = styled.nav`
  height: auto;
  display: flex;

  & .resume-link-wrapper {
    background-color: ${({ theme }) => theme.colors.chineseBlack};
    margin-left: 1em;
    align-self: flex-end;
  }
`;

export default function HorizontalMenu() {
  return (
    <StyledHeader>
      <HeaderLine />

      <StyledNav>
        {content.navigationLinks.map((link) => (
          <NavigationLink
            defaultActive={link.name === "HOME"}
            text={link.name}
            to={link.url}
          />
        ))}

        <div className="resume-link-wrapper">
          <ResumeLink />
        </div>
      </StyledNav>
    </StyledHeader>
  );
}
