import { NavigationLink, BoxLink } from "@/components";
import { content } from "@/utils";
import { HeaderWrapper } from "@/components";
import { HeaderLine, StyledNav } from "./style";
import { resume } from "@/assets/files";

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
          <BoxLink to={resume}>RESUME</BoxLink>
        </div>
      </StyledNav>
    </HeaderWrapper>
  );
}
