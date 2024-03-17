import { LandingPage } from "@/layouts";
import { About, Home } from "./components";

export default function MainLandingPage() {
  return (
    <LandingPage>
      <Home />

      <About />
    </LandingPage>
  );
}
