import styled from "styled-components";

const StyledResumeLink = styled.div`
  display: block;
  width: 100%;
  position: relative;
  background-color: inherit;
  padding: 15px 20px;
  border: 2px solid ${({ theme }) => theme.colors.electricGreen};
  border-radius: 5px;
  transition: all 0.5s;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  height: fit-content;

  a {
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.electricGreen};
    transition: font 0.1s;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    height: 30px;
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

    a {
      color: #002f00;
    }

    &::before,
    &::after {
      height: 0;
    }
  }
`;

export default function ResumeLink() {
  return (
    <StyledResumeLink className="resume-link">
      <a href="">RESUME</a>
    </StyledResumeLink>
  );
}
