import { NavigationLink, ResumeLink } from "@/components";
import styled from "styled-components";
import { content } from "@/utils";

const StyledHeader = styled.header`
  margin-top: 2em;
  display: flex;
  width: 100%;
  height: 55px;
  font-size: 1.5rem;
`;

const HeaderLine = styled.div`
  border-bottom: var(--horizontal-header-line-width) solid
    ${({ theme }) => theme.colors.electricGreen};
  flex-grow: 1;
  height: auto;
`;

const StyledNav = styled.nav`
  height: auto;
  display: flex;

  & .resume-link-wrapper {
    font-size: 1.7rem;
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
