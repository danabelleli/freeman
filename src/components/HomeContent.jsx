import styled from "styled-components";

const Container = styled.div`
  //  width: 100%;
  // height: fit-content;
  background-image: url("../photo-1.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top -150px;
  flex-grow: 1;
`;

function HomeContent() {
  return <Container></Container>;
}

export default HomeContent;
