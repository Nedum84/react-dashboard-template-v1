import React from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function AppLayout({ children }) {
  return (
    <Container>
      <Sidebar />

      <section>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </section>
    </Container>
  );
}

export default AppLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  section {
    display: flex;
    flex-direction: column;
  }
`;
const Content = styled.div`
  flex: 1;
`;
