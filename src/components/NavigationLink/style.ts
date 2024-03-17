import styled, { css } from "styled-components";

export const StyledNavigationLink = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.electricGreen};
  padding: 0 0.5em;

  border-bottom: var(--line-width) solid
    ${({ theme }) => theme.colors.electricGreen};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0.4em;

  ${({ isActive }) =>
    isActive &&
    css`
      align-self: flex-end;
      padding: 0;
      height: 30px;
      flex-direction: row;
      border-bottom: none;

      &::before,
      &::after {
        content: "";
        display: block;
        border-top: var(--line-width) solid
          ${({ theme }) => theme.colors.electricGreen};
        width: 12px;
      }

      &::before {
        border-left: var(--line-width) solid
          ${({ theme }) => theme.colors.electricGreen};
        margin-right: 5px;
      }

      &::after {
        border-right: var(--line-width) solid
          ${({ theme }) => theme.colors.electricGreen};
        margin-left: 5px;
      }

      span {
        transition: 0.3s;
        transform: translateY(-14px);
      }
    `}
`;
