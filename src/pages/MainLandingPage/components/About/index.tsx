import { AnimatedContainer, Section } from "@/components";
import { content } from "@/utils";
import { swiftLearner } from "@/assets/images";
import { StyledAboutInfo } from "./style";

export default function About() {
  return (
    <AnimatedContainer
      duration={0.7}
      direction="down-up"
      animationMode="linear"
      movementScale="2%"
    >
      <Section title="ABOUT ME" id="about">
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
    </AnimatedContainer>
  );
}
