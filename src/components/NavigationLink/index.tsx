import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledNavigationLink } from "./style";

type NavigationLinkProps = {
  to: string;
  text: string;
  defaultActive?: boolean;
};

export default function NavigationLink({
  to,
  text,
  defaultActive,
}: NavigationLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      setIsActive(defaultActive || false);
    } else {
      setIsActive(to.includes(hash));
    }
  }, [hash]);

  return (
    <StyledNavigationLink href={to} isActive={isActive}>
      <span>{text}</span>
    </StyledNavigationLink>
  );
}
