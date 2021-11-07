import { UserProvider } from "contexts/UserContext";
import React from "react";
import styled from "styled-components";
import COLORS from "styles/colors";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function AppLayout({ children }) {
  return (
    <UserProvider>
      <Container>
        <Sidebar />
        <section>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </section>
      </Container>
    </UserProvider>
  );
}

export default AppLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1.4rem;
  flex-direction: row;
  section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
const Content = styled.div`
  flex: 1;
  background-color: ${COLORS.grey};
  /* width: 100%; */
`;
