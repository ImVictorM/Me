import { css } from "styled-components";

const variables = css`
  :root {
    --line-width: 2px;
    --convert-svg-color-to-electric-green: invert(60%) sepia(94%)
      saturate(4098%) hue-rotate(88deg) brightness(120%) contrast(118%);
    --chiang-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --header-height: 80px;
    --header-scroll-height: 70px;

    --shadow-green-smooth: #04290280;
  }
`;

export default variables;
