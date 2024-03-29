import { StyledBoxLink } from "./style";

type BoxLinkProps = {
  to: string;
  children: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export default function BoxLink({ to, children, target }: BoxLinkProps) {
  return (
    <StyledBoxLink href={to} target={target || "_blank"}>
      {children}
    </StyledBoxLink>
  );
}
