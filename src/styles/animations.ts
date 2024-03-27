import { css, keyframes } from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";

const fromTopToBottomAnimation = (movementScale: string) => keyframes`
  from {
    opacity: 0;
    transform: translateY(-${movementScale});
  }
  to {
    opacity: 1;
    transform: translate(0%);
  }
`;

const fromRightToLeftAnimation = (movementScale: string) => keyframes`
  from {
    opacity: 0;
    transform: translateX(${movementScale});
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fromLeftToRightAnimation = (movementScale: string) => keyframes`
  from {
    opacity: 0;
    transform: translateX(-${movementScale});
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fromBottomToTopAnimation = (movementScale: string) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${movementScale});
  }
  to {
    opacity: 1;
    transform: translate(0%);
  }
`;

export type SlideAnimationDirection =
  | "left-right"
  | "right-left"
  | "up-down"
  | "down-up";

export type AnimateOn = "scroll" | "view";

export type AnimationMode = "both" | "linear" | "none";

export type SlideAnimationParams = {
  duration: number;
  direction: SlideAnimationDirection;
  animationDelay?: number;
  animateOn?: AnimateOn;
  animationMode?: AnimationMode;
  movementScale: string;
  shouldTrigger?: boolean;
};

const slideAnimationMap = (
  intensity: string
): Record<SlideAnimationDirection, Keyframes> => {
  return {
    "left-right": fromLeftToRightAnimation(intensity),
    "right-left": fromRightToLeftAnimation(intensity),
    "up-down": fromTopToBottomAnimation(intensity),
    "down-up": fromBottomToTopAnimation(intensity),
  };
};

export const slideAnimation = ({
  duration,
  direction,
  animationDelay,
  animateOn,
  animationMode = "linear",
  movementScale,
  shouldTrigger = true,
}: SlideAnimationParams) => {
  const animationType = slideAnimationMap(movementScale);

  if (shouldTrigger) {
    return css`
      animation: ${animationType[direction]} ease ${`${duration}s`};
      animation-iteration-count: 1;
      animation-fill-mode: ${animationMode};
      animation-delay: ${`${animationDelay || 0}s`};
      ${animateOn && `animation-timeline: ${animateOn}()`}
    `;
  }
};
