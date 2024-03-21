import { createGlobalStyle } from "styled-components";
import fonts from "./font.module.css";
import variables from "./variables";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
 ${fonts}
 ${variables}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.monofonto}, sans-serif;
  font-size: calc(15px + 0.390625vw);
  color: ${({ theme }) => theme.colors.jetStream};
  background-color: ${({ theme }) => theme.colors.chineseBlack};
  line-height: 1;

  &.blur {
    overflow: hidden;
    #content > * {
      filter: blur(5px) brightness(0.7);
      transition: var(--chiang-transition);
      pointer-events: none;
      user-select: none;
    }
  }
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

.title {
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.electricGreen};

  @media ${device.md} {
    font-size: 3rem;
  }

  @media ${device.sm} {
    font-size: 1.5rem;
  }
}

.paragraph {
  font-size: 1.875rem;
  color: ${({ theme }) => theme.colors.jetStream};

  @media ${device.md} {
    font-size: 1.375rem;
  }

  @media ${device.sm} {
    font-size: 1rem;
  }
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
