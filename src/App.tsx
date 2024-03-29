import { Route, Routes } from "react-router-dom";
import { MainLandingPage, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
