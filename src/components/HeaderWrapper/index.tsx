import { useScrollDirection } from "@/hooks";
import { StyledHeader } from "./styles";
import { AnimatedContainer } from "..";

type HeaderWrapperProps = {
  children: React.ReactNode;
};

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const { scrollDirection, scrollY } = useScrollDirection();
  return (
    <AnimatedContainer direction="up-down" movementScale="100%" duration={1}>
      <StyledHeader $scrollDirection={scrollDirection} $scrollY={scrollY}>
        {children}
      </StyledHeader>
    </AnimatedContainer>
  );
}
