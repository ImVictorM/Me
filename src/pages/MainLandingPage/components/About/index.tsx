import { Section } from "@/components";
import { content } from "@/utils";
import { swiftLearner } from "@/assets/images";
import { StyledAboutInfo } from "./style";

export default function About() {
  return (
    <Section title="ABOUT ME">
      <StyledAboutInfo>
        <img
          src={swiftLearner}
          alt="vault boy using computer"
          className="about-image"
        />

        <div className="about-content">
          <h3 className="title">HELLO, I AM VICTOR!</h3>

          <p className="paragraph">{content.about}</p>
        </div>
      </StyledAboutInfo>
    </Section>
  );
}
