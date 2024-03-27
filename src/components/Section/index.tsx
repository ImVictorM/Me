import { AnimatedContainer, SectionTitle } from "@/components";
import { StyledSection } from "./style";
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
            <SectionTitle>{title}</SectionTitle>
          </AnimatedContainer>
        ) : (
          <SectionTitle>{title}</SectionTitle>
        )}
        <div>{children}</div>
      </div>
    </StyledSection>
  );
}
