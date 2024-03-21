import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Footer, HorizontalMenu, NavigationDrawer } from "./components";
import { useWindowDimensions } from "@/hooks";
import { size, device } from "@/styles/breakpoints";

const StyledLayout = styled.div`
  padding: 0 2em;

  @media ${device.sm} {
    padding: 0 1.5em;
  }

  @media ${device.xs} {
    padding: 0 1em;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function LandingPage({ children }: LayoutProps) {
  const { width } = useWindowDimensions();
  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledContainer>
          {width >= parseInt(size.sm) ? (
            <HorizontalMenu />
          ) : (
            <NavigationDrawer />
          )}
          <div id="content">{children}</div>
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </StyledLayout>
  );
}
