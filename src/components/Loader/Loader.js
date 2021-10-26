import React from "react";
import styled from "styled-components";

function FullPageLoader() {
  return <Container>Loading...</Container>;
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export default FullPageLoader;
