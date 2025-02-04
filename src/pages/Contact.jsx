import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const H1 = styled.h1`
  font-family: var(--font-title);
  font-size: 3rem;
  letter-spacing: 0.2rem;
  // background-color: pink;
  padding: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

function Contact() {
  return (
    <Container>
      <H1>features/booking</H1>
      <ContactForm />
    </Container>
  );
}

export default Contact;
