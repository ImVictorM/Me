import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledLandingPageLayout = styled.div`
  padding: 0 2em;

  @media ${device.sm} {
    padding: 0 1.5em;
  }

  @media ${device.xs} {
    padding: 0 1em;
  }
`;

export const StyledPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;
