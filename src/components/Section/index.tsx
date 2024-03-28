import { AnimatedContainer } from "@/components";
import { StyledSection, StyledSectionTitle } from "./style";
import useScrollToSectionRef from "@/hooks/useScrollToSectionRef";
import React from "react";
import { SlideAnimationParams } from "@/styles/animations";

type SectionProps = {
  title: string;
  id: string;
  children: React.ReactNode;
  titleAnimation?: SlideAnimationParams;
};

export default function Section({
  title,
  id,
  children,
  titleAnimation,
}: SectionProps) {
  const sectionRef = useScrollToSectionRef(id);

  return (
    <StyledSection>
      <div ref={sectionRef} id={id}>
        {titleAnimation ? (
          <AnimatedContainer {...titleAnimation}>
            <StyledSectionTitle>{title}</StyledSectionTitle>
          </AnimatedContainer>
        ) : (
          <StyledSectionTitle>{title}</StyledSectionTitle>
        )}
        <div>{children}</div>
      </div>
    </StyledSection>
  );
}
