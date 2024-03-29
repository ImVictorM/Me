import { LandingPage } from "@/layouts";
import { StyledNotFoundContainer } from "./style";
import { vaultMeDeadGreen } from "@/assets/images";
import { BoxLink } from "@/components";

export default function NotFound() {
  return (
    <LandingPage>
      <StyledNotFoundContainer>
        <div className="content">
          <div>
            <h1>404</h1>
            <img src={vaultMeDeadGreen} alt="vault boy dead face" />
          </div>

          <h2>Page Not Found</h2>

          <div className="link-wrapper">
            <BoxLink to="/" target="_self">
              GO HOME
            </BoxLink>
          </div>
        </div>
      </StyledNotFoundContainer>
    </LandingPage>
  );
}
