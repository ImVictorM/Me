import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-template-rows: repeat(250px);
  gap: 1em;

  @media ${device.md} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const StyledProjectCardWrapper = styled.a`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.eerieBlack};
  padding: 1.5em 1em;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  height: 100%;
  transition: var(--chiang-transition);

  @media ${device.md} {
    flex-direction: column;
  }

  .project-card-image {
    position: relative;
    min-width: 250px;
    min-height: 200px;
    width: 250px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s;
      filter: grayscale(100%) contrast(1) brightness(90%);
    }

    &::before {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.electricGreen};
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.35;
      transition: var(--chiang-transition);
    }

    img,
    &::before {
      border-radius: 7px;
    }

    @media ${device.md} {
      margin: 0 auto;
    }
  }

  &:hover,
  &:focus {
    transform: translateY(-0.4em);
    box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.electricGreen};

    .project-card-image {
      img,
      &::before {
        background-color: transparent;
        filter: none;
      }
    }
  }
`;

export const StyledProjectCardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.4em;
  margin-left: 1em;

  @media ${device.md} {
    margin-left: 0;
    margin-top: 1em;
  }

  .project-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .project-title {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.electricGreen};

      @media ${device.sm} {
        font-size: 1.5rem;
      }
    }

    .project-links {
      display: flex;
      flex-direction: row;
      align-self: baseline;
      margin-left: 0.4em;
      gap: 0.4em;

      a {
        width: 24px;
        transition: all 0.2s;

        img {
          width: 100%;
        }

        &:hover {
          filter: var(--convert-svg-color-to-electric-green);
        }
      }
    }
  }

  .project-description {
    margin: 0.5em 0;
    font-size: 1.5rem;

    @media ${device.sm} {
      font-size: 1rem;
    }
  }

  .project-footer {
    margin-top: auto;
    ul {
      display: flex;
      font-size: 1rem;
      flex-direction: row;
      gap: 0.5em;
      opacity: 0.7;
    }
  }
`;
