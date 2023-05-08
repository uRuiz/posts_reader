import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { Button } from "../Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    // When
    render(<Button onPress={() => {}}>Click me</Button>);

    //Then
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("handles the onPress event correctly", () => {
    // When
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock}>Click me</Button>);
    const buttonText = screen.getByText("Click me");

    //Then
    expect(buttonText).toBeDefined();

    fireEvent.press(buttonText);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
