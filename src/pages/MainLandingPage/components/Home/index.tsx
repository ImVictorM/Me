import { vaultMeThumbsUp, linkedinIcon, githubIcon, emailIcon } from "@/assets";
import { content } from "@/utils";
import styled from "styled-components";
import { device, size } from "@/styles/breakpoints";
import { useWindowDimensions } from "@/hooks";

const StyledHomeContainer = styled.section`
  margin: 10vh auto 0;
  width: 100%;
  gap: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.lg} {
    justify-content: space-between;
  }
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: auto;
`;

const StyledHeroImage = styled.div`
  max-width: 700px;
  position: relative;
  min-width: 600px;

  @media ${device.lg} {
    min-width: 400px;
  }

  @media ${device.md} {
    min-width: 200px;
  }

  & img {
    max-width: 600px;
    width: 100%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.eerieBlack};
    z-index: -1;
  }
`;

const StyledHeroPresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 0.6em;

  .first-name,
  .last-name {
    font-size: 7rem;

    @media ${device.md} {
      font-size: 5rem;
    }

    @media ${device.xs} {
      font-size: 3.5rem;
    }
  }

  .role {
    transform: translateY(-0.4em);
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.electricGreen};

    @media ${device.md} {
      font-size: 1.65rem;
    }

    @media ${device.xs} {
      font-size: 1.2rem;
    }
  }

  .first-name {
    color: ${({ theme }) => theme.colors.onyx};
    text-shadow: -4px 0 ${({ theme }) => theme.colors.electricGreen};
  }

  & div:first-child {
    background-color: ${({ theme }) => theme.colors.eerieBlack};
    width: fit-content;
    padding-right: 10%;
  }

  & div:last-child {
    margin-left: 7.7em;
    display: flex;
    flex-direction: column;

    @media ${device.md} {
      margin-left: 4.5em;
    }
  }
`;

const StyledHeroText = styled.p`
  width: 100%;
  font-size: 1.5rem;
  opacity: 0.5;
  margin-bottom: 1em;
  max-width: 500px;

  @media ${device.md} {
    font-size: 1.2rem;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 1em;

  a {
    transition: all 0.2s;

    &:hover {
      filter: var(--convert-svg-color-to-electric-green);
    }

    @media ${device.md} {
      width: 32px;
    }
  }
`;

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

        <StyledHeroText>{content.hero}</StyledHeroText>

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
