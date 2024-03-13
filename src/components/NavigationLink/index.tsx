import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavigationLink = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.electricGreen};
  padding: 0 0.5em;

  border-bottom: 4px solid ${({ theme }) => theme.colors.electricGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      align-self: flex-end;
      padding: 0;
      height: 65%;
      flex-direction: row;
      border-bottom: none;

      div:first-child {
        border-left: 4px solid ${({ theme }) => theme.colors.electricGreen};
        border-top: 4px solid ${({ theme }) => theme.colors.electricGreen};
        width: 1rem;
        margin-right: 5px;
      }

      div:last-child {
        border-top: 4px solid ${({ theme }) => theme.colors.electricGreen};
        width: 1rem;
        border-right: 4px solid ${({ theme }) => theme.colors.electricGreen};
        margin-left: 5px;
      }

      span {
        transition: 0.3s;
        transform: translateY(-14px);
      }
    `}
`;

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
      <div />
      <span>{text}</span>
      <div />
    </StyledNavigationLink>
  );
}
