import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledHomeContainer = styled.section`
  margin: auto 0;
  width: 100%;
  gap: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  min-height: 100vh;

  @media ${device.lg} {
    justify-content: space-between;
  }
`;

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: auto;
`;

export const StyledHeroImage = styled.div`
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

export const StyledHeroPresentation = styled.div`
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

export const StyledHeroText = styled.p`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 1em;
  max-width: 500px;

  @media ${device.md} {
    font-size: 1.2rem;
  }
`;

export const StyledSocialLinks = styled.div`
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
