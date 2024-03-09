import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Route, Routes } from "react-router-dom";
import { MainLandingPage, NotFound } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>

      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
