import styled from "styled-components";

export const HeaderLine = styled.div`
  border-bottom: var(--line-width) solid
    ${({ theme }) => theme.colors.electricGreen};
  flex-grow: 1;
  height: auto;
`;

export const StyledNav = styled.nav`
  height: auto;
  display: flex;

  & .resume-link-wrapper {
    font-size: 1.3rem;
    background-color: ${({ theme }) => theme.colors.chineseBlack};
    margin-left: 1em;
    align-self: flex-end;
  }
`;
