import { SectionTitle } from "@/components";
import { StyledSection } from "./style";

type SectionProps = {
  title: string;
  id: string;
  children: React.ReactNode;
};

export default function Section({ title, id, children }: SectionProps) {
  return (
    <StyledSection id={id}>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </StyledSection>
  );
}
