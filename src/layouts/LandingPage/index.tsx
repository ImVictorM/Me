import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Footer, HorizontalMenu, NavigationDrawer } from "./components";
import { useWindowDimensions } from "@/hooks";
import { size } from "@/styles/breakpoints";

const StyledLayout = styled.div`
  padding: 0 2em;
`;

const StyledContainer = styled.div`
  display: flex;

  flex-direction: column;
  max-width: 1600px;
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

          {children}

          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </StyledLayout>
  );
}
