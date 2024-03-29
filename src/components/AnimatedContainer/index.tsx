import { SlideAnimationParams } from "@/styles/animations";
import { StyledAnimatedContainer } from "./style";
import { useEffect, useRef, useState } from "react";

type AnimatedContainerProps = SlideAnimationParams & {
  children: React.ReactNode;
};

export default function AnimatedContainer({
  children,
  duration,
  direction,
  animateOn,
  animationDelay,
  animationMode,
  movementScale,
}: AnimatedContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedContainerRef.current) {
      observer.observe(animatedContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <StyledAnimatedContainer
      ref={animatedContainerRef}
      $direction={direction}
      $animationDuration={duration}
      $delay={animationDelay}
      $animateOn={animateOn}
      $animationMode={animationMode}
      $movementScale={movementScale}
      $shouldTrigger={isVisible}
    >
      {children}
    </StyledAnimatedContainer>
  );
}
