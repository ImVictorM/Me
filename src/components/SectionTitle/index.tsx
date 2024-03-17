import { StyledSectionTitle } from "./style";

type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
}
