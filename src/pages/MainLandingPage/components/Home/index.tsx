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
import { AnimatedContainer } from "@/components";
import useScrollToSectionRef from "@/hooks/useScrollToSectionRef";

export default function Home() {
  const { width } = useWindowDimensions();
  const ref = useScrollToSectionRef("home");

  return (
    <StyledHomeContainer ref={ref} id="home">
      <StyledHero>
        <AnimatedContainer
          duration={1}
          direction="down-up"
          animationMode="both"
          movementScale="20%"
        >
          <StyledHeroPresentation>
            <div>
              <span className="first-name">VICTOR</span>
            </div>

            <div>
              <span className="last-name">MENDES</span>
              <span className="role">Software developer</span>
            </div>
          </StyledHeroPresentation>
        </AnimatedContainer>

        <AnimatedContainer
          duration={1.2}
          animationDelay={0.4}
          direction="down-up"
          animationMode="both"
          movementScale="15%"
        >
          <StyledHeroText className="paragraph">{content.hero}</StyledHeroText>
        </AnimatedContainer>

        <AnimatedContainer
          movementScale="10%"
          duration={1.4}
          animationDelay={0.8}
          direction="down-up"
          animationMode="both"
        >
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
        </AnimatedContainer>
      </StyledHero>

      {width >= parseInt(size.sm) && (
        <AnimatedContainer
          direction="right-left"
          duration={1}
          movementScale="20%"
        >
          <StyledHeroImage>
            <img src={vaultMeThumbsUp} alt="thumbs up vault boy" />
          </StyledHeroImage>
        </AnimatedContainer>
      )}
    </StyledHomeContainer>
  );
}
