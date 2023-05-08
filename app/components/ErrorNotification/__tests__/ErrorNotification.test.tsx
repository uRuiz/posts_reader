import React from "react";
import { screen, render } from "@testing-library/react-native";
import { ErrorNotification } from "../ErrorNotification";

const defaultMessage = "Ha ocurrido un error al cargar los datos";
describe("ErrorNotification", () => {
  it("renders the provided error message", () => {
    // When
    const error = "Error personalizado";
    render(<ErrorNotification error={error} />);

    // Then
    expect(screen.getByText(error)).toBeTruthy();
  });

  it("renders a default error message when no error message is provided", () => {
    // When
    render(<ErrorNotification error={null} />);

    // Then
    expect(screen.getByText(defaultMessage)).toBeTruthy();
  });

  it("renders a default error message when error is not a string", () => {
    // When
    const error = { code: 404, message: "Not found" };
    render(<ErrorNotification error={error} />);

    // Then
    expect(screen.getByText(defaultMessage)).toBeTruthy();
  });
});
