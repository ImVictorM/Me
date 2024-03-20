import styled from "styled-components";

export const StyledContactPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.electricGreen};
    font-size: 3.5rem;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2em;

  .personal-info {
    display: flex;
    gap: 1em;
  }
`;
