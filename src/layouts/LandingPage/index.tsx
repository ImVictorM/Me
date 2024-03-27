import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Footer, HorizontalMenu, NavigationDrawer } from "./components";
import { useWindowDimensions } from "@/hooks";
import { size } from "@/styles/breakpoints";
import { StyledContentContainer, StyledLandingPageLayout } from "./style";

type LayoutProps = {
  children: React.ReactNode;
};

export default function LandingPage({ children }: LayoutProps) {
  const { width } = useWindowDimensions();

  return (
    <StyledLandingPageLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {width >= parseInt(size.sm) ? <HorizontalMenu /> : <NavigationDrawer />}
        <StyledContentContainer id="content">{children}</StyledContentContainer>
        <Footer />
      </ThemeProvider>
    </StyledLandingPageLayout>
  );
}
