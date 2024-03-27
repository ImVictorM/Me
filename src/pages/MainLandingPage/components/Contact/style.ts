import { device } from "@/styles/breakpoints";
import { Bounce, ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledContactPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.3;
    text-align: center;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 2em 0;

  .personal-info {
    display: flex;
    gap: 1em;
    @media ${device.md} {
      flex-wrap: wrap;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  margin: 0 auto;
  width: 60%;

  @media ${device.sm} {
    width: 100%;
  }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  transition: Bounce,
  toastClassName: "toast",
})`
  .toast {
    background-color: ${({ theme }) => theme.colors.chineseBlack};
    color: ${({ theme }) => theme.colors.jetStream};
  }
  /** handle the notification color and the text color based on the theme **/
  .Toastify__toast-icon {
    width: 40px;
  }

  .Toastify__progress-bar--error {
    background-color: ${({ theme }) => theme.colors.alertRed};
  }

  .Toastify__progress-bar--success {
    background-color: ${({ theme }) => theme.colors.electricGreen};
  }

  .Toastify__close-button {
    color: white;
  }
`;
