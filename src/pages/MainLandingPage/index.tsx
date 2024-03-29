import { LandingPage } from "@/layouts";
import { About, Contact, Home, Projects } from "./components";

export default function MainLandingPage() {
  return (
    <LandingPage>
      <Home />
      <About />
      <Projects />
      <Contact />
    </LandingPage>
  );
}
