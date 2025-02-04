import styled from "styled-components";
import HomeContent from "../components/HomeContent";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <HomeContent />
    </Container>
  );
}

export default Home;
