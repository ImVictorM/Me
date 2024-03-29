import {
  AnimatedContainer,
  ButtonGreen,
  FormInput,
  FormTextArea,
  Section,
} from "@/components";
import {
  StyledButtonWrapper,
  StyledContactPresentation,
  StyledInputsWrapper,
  StyledToastContainer,
} from "./style";
import { useState, useRef, useMemo, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { environment } from "@/utils";
import { toast } from "react-toastify";
import { vaultMeDeadRed, vaultMeNeutral } from "@/assets/images";

export interface FormField {
  value: string;
  errors: string[];
  validate: (value: string, isFormBlank: boolean) => string[];
}

export interface FormState {
  name: FormField;
  email: FormField;
  message: FormField;
}

export default function Contact() {
  const maxMessageLength = 600;
  const form = useRef(null);
  const [formState, setFormState] = useState<FormState>({
    name: {
      value: "",
      errors: [],
      validate: (value: string, isFormBlank: boolean) => {
        const errors: string[] = [];

        if (!isFormBlank && value === "") {
          errors.push("Name is required.");
        }

        return errors;
      },
    },
    email: {
      value: "",
      errors: [],
      validate: (value: string, isFormBlank: boolean) => {
        const errors: string[] = [];
        const emailRegex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!isFormBlank && value === "") {
          errors.push("Email is required.");
        } else if (!isFormBlank && !emailRegex.test(value)) {
          errors.push("Email has an incorrect format.");
        }

        return errors;
      },
    },
    message: {
      value: "",
      errors: [],
      validate: (value: string, isFormBlank: boolean) => {
        const errors: string[] = [];

        if (!isFormBlank && value === "") {
          errors.push("Message is required.");
        }

        return errors;
      },
    },
  });
  const [isSending, setIsSending] = useState(false);

  const isFormValid = useMemo(() => {
    return !Object.values(formState).some(({ errors }) => {
      return errors.length !== 0;
    });
  }, [formState]);
  const isFormBlank = useMemo(() => {
    return Object.values(formState).every(({ value }) => value === "");
  }, [formState]);

  function sendEmail(event: React.FormEvent) {
    setIsSending(true);
    event.preventDefault();
    if (!form.current) return;
    if (
      !environment.emailServiceId ||
      !environment.emailTemplateId ||
      !environment.emailUserId
    ) {
      toast.error("Sorry, but you are not allowed to use this feature.");
      return;
    }

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
            toast.success("Email sent!");
          },
          () => {
            toast.error("Something went wrong.");
          }
        );
    } else {
      toast.error("Sorry, but you cannot send emails in this mode.");
    }

    setIsSending(false);
  }

  function handleFormChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    const { id, value } = event.target;
    const fieldName = id as keyof FormState;

    setFormState((previousFormState) => ({
      ...previousFormState,
      [fieldName]: {
        ...previousFormState[fieldName],
        value,
        errors: previousFormState[fieldName].validate(value, isFormBlank),
      },
    }));
  }

  useEffect(() => {
    const triggerValidationForAllInputs = () => {
      const updatedFormState = Object.entries(formState).reduce(
        (acc, [key, values]) => {
          const fieldName = key as keyof FormState;
          return {
            ...acc,
            [fieldName]: {
              ...values,
              errors: values.validate(values.value, isFormBlank),
            },
          };
        },
        {} as FormState
      );

      setFormState({ ...updatedFormState });
    };

    triggerValidationForAllInputs();
  }, [isFormBlank]);

  return (
    <AnimatedContainer
      duration={0.7}
      direction="down-up"
      animationMode="linear"
      movementScale="2%"
    >
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
                errors={formState.name.errors}
                id="name"
                label="YOUR NAME"
                placeholder="Enter your name"
                maxLength={60}
                value={formState.name.value}
                onChange={handleFormChange}
              />

              <FormInput
                type="email"
                id="email"
                name="sender_email"
                errors={formState.email.errors}
                label="EMAIL ADDRESS"
                placeholder="Enter your email address"
                maxLength={60}
                value={formState.email.value}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <FormTextArea
                id="message"
                placeholder="Enter the message you want to send me!"
                label="MESSAGE"
                rows={5}
                errors={formState.message.errors}
                name="message"
                maxLength={maxMessageLength}
                value={formState.message.value}
                onChange={handleFormChange}
              />
            </div>
          </StyledInputsWrapper>

          <StyledButtonWrapper>
            <ButtonGreen
              type="submit"
              disabled={isSending || isFormBlank || !isFormValid}
            >
              {isSending ? "SENDING EMAIL..." : "SEND EMAIL"}
            </ButtonGreen>
          </StyledButtonWrapper>
        </form>

        <StyledToastContainer
          icon={({ type }) =>
            type === "error" ? (
              <img src={vaultMeDeadRed} />
            ) : (
              <img src={vaultMeNeutral} />
            )
          }
        />
      </Section>
    </AnimatedContainer>
  );
}
