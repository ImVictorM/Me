import { SectionTitle } from "@/components";
import { StyledSection } from "./style";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </StyledSection>
  );
}
