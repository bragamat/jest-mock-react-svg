import React from "react";
import { hot } from "react-hot-loader/root";
import { Container } from "./styles";
import GlobalStyles from "../globalStyle";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <WelcomeMessage message="Sintam-se em casa 😁" />
      </Container>
    </>
  );
}

export default hot(App);
