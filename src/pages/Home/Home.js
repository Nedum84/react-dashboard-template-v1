import useAuth from "contexts/UserContext";
import React from "react";
import { Container } from "./Styles";

function Home() {
  const { user, setUser } = useAuth();

  const update = () => {
    setUser({
      name: "Ogbonnnaya",
      surname: "Ogbonnnaya",
    });
  };

  return (
    <Container>
      Home Hey
      {JSON.stringify(user)}
      <hr />
      <button onClick={update}>Update User</button>
    </Container>
  );
}

export default Home;
