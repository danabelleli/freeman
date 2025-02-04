import styled from "styled-components";
import { useForm } from "react-hook-form";
import sendEmail from "../services/apiEmails";

const Form = styled.form`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-grow: 1;
  width: 60rem;
  padding: 5rem 5rem;
  column-gap: 2rem;
  text-transform: capitalize;

  & .span1 {
    display: flex;
    flex-direction: column;
  }

  & label {
    font-size: 1.4rem;
  }

  @media (max-width: 1366px) {
    width: 90%;
    flex-grow: 0;
    height: 60vh;
  }

  @media (max-width: 1180px) {
    width: 90%;
    flex-grow: 0;
    height: 70vh;
  }

  @media (max-width: 1024px) {
    width: 90%;
    flex-grow: 0;
    height: 50vh;
  }

  @media screen and (max-width: 1024px) and (orientation: landscape) {
    /* Styles for landscape mode on small screens */
    width: 90%;
    flex-grow: 0;
    height: 70vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-grow: 0;
    height: 60vh;
  }

  @media (max-width: 430px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem;
    gap: 2rem;
    flex-grow: 1;

    & button {
      padding: 1rem 4rem;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 2rem;
    flex-grow: 1;

    & input {
      height: 2.5rem;
    }

    & textarea {
      height: 10rem;
    }

    & button {
      padding: 1rem 4rem;
    }
  }

  @media screen and (max-width: 844px) and (orientation: landscape) {
    /* Styles for landscape mode on small screens */
    width: 100%;
    padding: 2rem 2rem;

    & textarea {
      height: 10rem;
    }

    & input {
      height: 3rem;
    }
  }

  @media screen and (max-width: 932px) and (orientation: landscape) {
    /* Styles for landscape mode on small screens */
    //width: 90%;
    //flex-grow: 1;
    height: 100vh;

    & textarea {
      height: 12rem;
    }

    & button {
      margin-top: 1rem;
    }
  }
`;

const Span2Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 2;
`;

const Input = styled.input`
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  font-family: var(--font-body);

  border: none; /* Remove default borders */
  border-bottom: 2px solid transparent; /* Transparent border initially */
  outline: none; /* Remove the default focus outline */
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #9d4edd;
  }
`;

const Textbox = styled.textarea`
  height: 16rem;
  resize: none;
  padding: 1rem 1rem;
  font-family: var(--font-body);
  font-size: 1.6rem;

  border: none; /* Remove default borders */
  border-bottom: 2px solid transparent; /* Transparent border initially */
  outline: none; /* Remove the default focus outline */
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: var(--col-brand-2);
  }
`;

const Button = styled.button`
  background-color: var(--col-brand-2);
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  font-family: var(--font-title);
  letter-spacing: 0.2rem;
  border: none;
  cursor: pointer;
  padding: 0 5rem;

  &:hover {
    background-color: var(--col-brand-3);
  }
`;

const ButtonBox = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
`;

const serviceId = "service_ut64mag";
const templateId = "template_fmjoyhe";
const publicKey = "4sK_6aiHXmOySMsmt";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: data.firstName + " " + data.lastName,
        from_email: data.email,
        message: data.subject + ": " + data.message,
      },
    };
    sendEmail(emailData);
    reset();
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="span1">
        <label htmlFor="firstName">first name</label>
        <Input
          type="text"
          id="firstName"
          {...register("firstName", { required: "this field is requiered" })}
        />
      </div>
      <div className="span1">
        <label htmlFor="lastName">last name</label>
        <Input
          type="text"
          id="lastName"
          {...register("lastName", { required: "this field is requiered" })}
        />
      </div>
      <Span2Container>
        <label htmlFor="email">email</label>
        <Input
          type="text"
          id="email"
          {...register("email", { required: "this field is requiered" })}
        />
      </Span2Container>
      <Span2Container>
        <label>subject</label>
        <Input
          type="text"
          id="subject"
          {...register("subject", { required: "this field is requiered" })}
        />
      </Span2Container>
      <Span2Container>
        <label>message</label>
        <Textbox
          type="text"
          id="message"
          {...register("message", { required: "this field is requiered" })}
        />
      </Span2Container>
      <ButtonBox>
        <Button>submit</Button>
      </ButtonBox>
    </Form>
  );
}

export default ContactForm;
