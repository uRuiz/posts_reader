import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { PostItem } from "../PostItem";
import { FavoritesProvider } from "../../../context/FavoritesContext";

const mockPost = {
  id: 1,
  title: "Test Title",
  body: "Test Body",
  userId: 2,
  tags: ["tag1", "tag2"],
  reactions: 5,
};

const mockOnPress = jest.fn();
const mockOnPressFavorite = jest.fn();

describe("PostItem", () => {
  it("renders correctly", () => {
    // When
    render(
      <FavoritesProvider>
        <PostItem
          post={mockPost}
          onPress={mockOnPress}
          onPressFavorite={mockOnPressFavorite}
        />
      </FavoritesProvider>
    );

    // Then
    expect(screen.getByText(mockPost.title)).toBeTruthy();
    expect(screen.getByText("tag1, tag2")).toBeTruthy();
    expect(screen.getByText("Reacciones: 5")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    // When
    render(
      <FavoritesProvider>
        <PostItem
          post={mockPost}
          onPress={mockOnPress}
          onPressFavorite={mockOnPressFavorite}
        />
      </FavoritesProvider>
    );

    // Then
    fireEvent.press(screen.getByText(mockPost.title));
    expect(mockOnPress).toHaveBeenCalledWith(mockPost);
  });

  it("calls onPressFavorite when favorite button is pressed", () => {
    // When
    render(
      <FavoritesProvider>
        <PostItem
          post={mockPost}
          onPress={mockOnPress}
          onPressFavorite={mockOnPressFavorite}
        />
      </FavoritesProvider>
    );

    // Then
    fireEvent.press(screen.getByTestId("non-favorite-icon"));
    expect(mockOnPressFavorite).toHaveBeenCalledWith(mockPost.id);
  });
});
