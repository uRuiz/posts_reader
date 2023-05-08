import React from "react";
import { render, screen } from "@testing-library/react-native";
import { LoadingSpinner } from "../LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders the loading text and activity indicator", () => {
    // When
    render(<LoadingSpinner />);

    // Then
    expect(screen.getByText("Cargando")).toBeTruthy();
    expect(screen.getByTestId("activity-indicator")).toBeTruthy();
  });

  it("applies the provided style", () => {
    // When
    const customStyle = { backgroundColor: "red" };
    render(<LoadingSpinner style={customStyle} />);

    // Then
    expect(screen.getByTestId("loading-spinner-container").props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });
});
