import { ButtonGreen, FormInput, FormTextArea, Section } from "@/components";
import {
  StyledButtonWrapper,
  StyledContactPresentation,
  StyledInputsWrapper,
} from "./style";
import { useState } from "react";

export default function Contact() {
  const maxMessageLength = 600;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleFormChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    const { id, value } = event.target;
    setFormState((previousFormState) => ({
      ...previousFormState,
      [id]: value,
    }));
  }

  return (
    <Section title="CONTACT">
      <StyledContactPresentation>
        <h3 className="title">REACH ME OUT</h3>
        <p className="paragraph">
          Got a question, proposal or just want to say hi?
        </p>
        <p className="paragraph">Feel free!</p>
      </StyledContactPresentation>

      <StyledInputsWrapper>
        <div className="personal-info">
          <FormInput
            type="text"
            id="name"
            label="YOUR NAME"
            placeholder="Enter your name"
            maxLength={60}
            value={formState.name}
            onChange={handleFormChange}
          />

          <FormInput
            type="text"
            id="email"
            label="EMAIL ADDRESS"
            placeholder="Enter your email address"
            maxLength={60}
            value={formState.email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <FormTextArea
            id="message"
            placeholder="Enter the message you want to send me!"
            label="MESSAGE"
            rows={5}
            maxLength={maxMessageLength}
            value={formState.message}
            onChange={handleFormChange}
          />
        </div>
      </StyledInputsWrapper>

      <StyledButtonWrapper>
        <ButtonGreen>SEND</ButtonGreen>
      </StyledButtonWrapper>
    </Section>
  );
}
