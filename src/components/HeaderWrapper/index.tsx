import { useScrollDirection } from "@/hooks";
import { StyledHeader } from "./styles";

type HeaderWrapperProps = {
  children: React.ReactNode;
};

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const { scrollDirection, scrollY } = useScrollDirection();
  return (
    <StyledHeader $scrollDirection={scrollDirection} $scrollY={scrollY}>
      {children}
    </StyledHeader>
  );
}
