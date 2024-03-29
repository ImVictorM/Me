import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledNotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  justify-content: center;

  .content {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      position: relative;
    }

    img {
      position: absolute;
      top: -7.2rem;
      transform: rotate(20deg);
      right: 1.4rem;
      width: 10rem;
    }

    h1 {
      font-size: 12.5rem;
      color: ${({ theme }) => theme.colors.electricGreen};
      text-shadow: 5px 5px black;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: normal;
      margin-bottom: 1em;
    }

    .link-wrapper {
      width: 100%;
      position: absolute;
      bottom: 10em;
      max-width: 200px;
      background-color: ${({ theme }) => theme.colors.chineseBlack};
    }

    @media ${device.sm} {
      img {
        top: -4.6rem;
        right: 2rem;
        width: 6.6rem;
      }

      h1 {
        font-size: 10rem;
      }

      h2 {
        font-size: 1.6rem;
      }
    }
  }
`;
