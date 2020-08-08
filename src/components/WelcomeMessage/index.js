import React from "react";
import BirdsSvg from "./BirdsSvg";

function WelcomeMessage({ message }) {
  return (
    <>
      <h1 data-testid="welcome-message">{message}</h1>
      <BirdsSvg />
    </>
  );
}

export default WelcomeMessage;
