import { ButtonGreen, FormInput, FormTextArea, Section } from "@/components";
import {
  StyledButtonWrapper,
  StyledContactPresentation,
  StyledInputsWrapper,
} from "./style";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { environment } from "@/utils";

export default function Contact() {
  const maxMessageLength = 600;
  const form = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  function sendEmail(event: React.FormEvent) {
    setIsSending(true);
    event.preventDefault();
    if (!form.current) return;

    if (environment.isRunningOnProduction) {
      emailjs
        .sendForm(
          environment.emailServiceId,
          environment.emailTemplateId,
          form.current,
          {
            publicKey: environment.emailUserId,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }

    setIsSending(false);
  }

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
    <Section title="CONTACT" id="contact">
      <StyledContactPresentation>
        <h3 className="title">REACH ME OUT</h3>
        <p className="paragraph">
          Got a question, proposal or just want to say hi?
        </p>
        <p className="paragraph">Feel free!</p>
      </StyledContactPresentation>

      <form ref={form} onSubmit={sendEmail}>
        <StyledInputsWrapper>
          <div className="personal-info">
            <FormInput
              name="sender_name"
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
              name="sender_email"
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
              name="message"
              maxLength={maxMessageLength}
              value={formState.message}
              onChange={handleFormChange}
            />
          </div>
        </StyledInputsWrapper>

        <StyledButtonWrapper>
          <ButtonGreen type="submit" disabled={isSending}>
            {isSending ? "SENDING EMAIL..." : "SEND EMAIL"}
          </ButtonGreen>
        </StyledButtonWrapper>
      </form>
    </Section>
  );
}
