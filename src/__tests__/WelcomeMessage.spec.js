import React from "react";
import { render } from "@testing-library/react";
import WelcomeMessage from "../components/WelcomeMessage";

jest.mock("../components/WelcomeMessage/BirdsSvg", () => () => null);

describe("<WelcomeMessage />", () => {
  it("renders message as passed through props", () => {
    const message = "Sintam-se em casa 😁";
    const { debug, getByTestId } = render(<WelcomeMessage message={message} />);

    debug();
    expect(getByTestId("welcome-message").textContent).toBe(message);
  });
});
