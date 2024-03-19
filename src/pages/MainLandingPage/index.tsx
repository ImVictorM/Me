import { LandingPage } from "@/layouts";
import { About, Home, Projects } from "./components";

export default function MainLandingPage() {
  return (
    <LandingPage>
      <Home />
      <About />
      <Projects />
    </LandingPage>
  );
}
