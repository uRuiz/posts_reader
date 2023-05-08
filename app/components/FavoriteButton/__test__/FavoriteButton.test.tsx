import React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { FavoriteButton, FavoriteButtonProps } from "../FavoriteButton";

const defaultProps: FavoriteButtonProps = {
  isFavorite: false,
  onPress: jest.fn(),
};

describe("FavoriteButton", () => {
  it("renders correctly", () => {
    // When
    render(<FavoriteButton {...defaultProps} />);

    // Then
    expect(screen.getByTestId("non-favorite-icon")).toBeDefined();
  });

  it("renders correctly when isFavorite is true", () => {
    // When
    render(<FavoriteButton {...defaultProps} isFavorite />);

    // Then
    expect(screen.getByTestId("favorite-icon")).toBeDefined();
  });

  it("render correctly when is not Favorite and handles onPress correctly", () => {
    // When
    const onPress = jest.fn();
    render(<FavoriteButton {...defaultProps} onPress={onPress} />);

    // Then
    fireEvent.press(screen.getByTestId("non-favorite-icon"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
