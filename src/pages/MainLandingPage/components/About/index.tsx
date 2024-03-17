import { SectionTitle } from "@/components";
import { content } from "@/utils";
import { swiftLearner } from "@/assets";
import { StyledAboutInfo, StyledAboutSection } from "./style";

export default function About() {
  return (
    <StyledAboutSection>
      <SectionTitle>ABOUT ME</SectionTitle>

      <StyledAboutInfo>
        <img
          src={swiftLearner}
          alt="vault boy using computer"
          className="about-image"
        />

        <div className="about-content">
          <h3>HELLO, I AM VICTOR!</h3>

          <p>{content.about}</p>
        </div>
      </StyledAboutInfo>
    </StyledAboutSection>
  );
}
