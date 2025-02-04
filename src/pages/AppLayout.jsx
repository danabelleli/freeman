import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderV1 from "../components/Header-v1";

const Container = styled.div`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function AppLayout() {
  return (
    <Container>
      <HeaderV1 />
      <Outlet />
    </Container>
  );
}

export default AppLayout;
