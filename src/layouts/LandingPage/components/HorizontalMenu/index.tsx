import { NavigationLink, ResumeLink } from "@/components";
import { content } from "@/utils";
import { HeaderWrapper } from "@/components";
import { HeaderLine, StyledNav } from "./style";

export default function HorizontalMenu() {
  return (
    <HeaderWrapper>
      <HeaderLine />

      <StyledNav>
        {content.navigationLinks.map((link, index) => (
          <NavigationLink
            key={index.toString() + link.url}
            defaultActive={link.name === "HOME"}
            text={link.name}
            to={link.url}
          />
        ))}

        <div className="resume-link-wrapper">
          <ResumeLink />
        </div>
      </StyledNav>
    </HeaderWrapper>
  );
}
