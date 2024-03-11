import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components";

const StyledLayout = styled.div`
  margin-top: 5rem;
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
  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledContainer>
          <Header />

          {children}

          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </StyledLayout>
  );
}
