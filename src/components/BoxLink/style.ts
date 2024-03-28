import styled from "styled-components";

export const StyledBoxLink = styled.a`
  display: block;
  width: 100%;
  position: relative;
  background-color: inherit;
  padding: 15px 20px;
  border: 2px solid ${({ theme }) => theme.colors.electricGreen};
  border-radius: 5px;
  transition: all 0.5s ease;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  height: fit-content;
  color: ${({ theme }) => theme.colors.electricGreen};
  text-decoration: none;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 25px;
    position: absolute;
    width: 3px;
    top: 50%;
    background-color: inherit;
  }

  &::before {
    left: 0;
    transform: translateY(-50%) translateX(-2px);
    transition: height 0.3s ease-out;
  }

  &::after {
    right: 0;
    transform: translateY(-50%) translateX(2px);
    transition: height 0.3s ease-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.electricGreen};
    padding: 10px 20px;
    color: #002f00;

    &::before,
    &::after {
      height: 0;
    }
  }
`;
