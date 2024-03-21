import { linkedinIcon, githubIcon, emailIcon } from "@/assets/icons";
import { vaultMeThumbsUp } from "@/assets/images";
import { content } from "@/utils";
import { size } from "@/styles/breakpoints";
import { useWindowDimensions } from "@/hooks";
import {
  StyledHero,
  StyledHeroImage,
  StyledHeroPresentation,
  StyledHeroText,
  StyledHomeContainer,
  StyledSocialLinks,
} from "./style";

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <StyledHomeContainer id="#home">
      <StyledHero>
        <StyledHeroPresentation>
          <div>
            <span className="first-name">VICTOR</span>
          </div>

          <div>
            <span className="last-name">MENDES</span>
            <span className="role">Software developer</span>
          </div>
        </StyledHeroPresentation>

        <StyledHeroText className="paragraph">{content.hero}</StyledHeroText>

        <StyledSocialLinks>
          <a href={content.social.linkedin} target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>

          <a href={content.social.github} target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>

          <a href={`mailto:${content.social.email}`} target="_blank">
            <img src={emailIcon} alt="email icon" />
          </a>
        </StyledSocialLinks>
      </StyledHero>

      {width >= parseInt(size.sm) && (
        <StyledHeroImage>
          <img src={vaultMeThumbsUp} alt="thumbs up vault boy" />
        </StyledHeroImage>
      )}
    </StyledHomeContainer>
  );
}
