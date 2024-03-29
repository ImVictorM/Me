import { AnimateOn, AnimationMode, slideAnimation } from "@/styles/animations";
import styled from "styled-components";

type StyledAnimatedContainerProps = {
  $animationDuration: number;
  $direction: "left-right" | "right-left" | "up-down" | "down-up";
  $delay?: number;
  $animateOn?: AnimateOn;
  $animationMode?: AnimationMode;
  $movementScale: string;
  $shouldTrigger?: boolean;
};

export const StyledAnimatedContainer = styled.div<StyledAnimatedContainerProps>`
  & > *:first-child {
    visibility: ${({ $shouldTrigger }) =>
      $shouldTrigger ? "normal" : "hidden"};
    ${({
      $animationDuration,
      $direction,
      $delay,
      $animateOn,
      $animationMode,
      $movementScale,
      $shouldTrigger,
    }) =>
      slideAnimation({
        duration: $animationDuration,
        direction: $direction,
        animationDelay: $delay,
        animateOn: $animateOn,
        animationMode: $animationMode,
        movementScale: $movementScale,
        shouldTrigger: $shouldTrigger,
      })}
  }
`;
