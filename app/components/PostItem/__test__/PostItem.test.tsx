import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { PostItem } from "../PostItem";
import { FavoritesProvider } from "../../../context/FavoritesContext";
import { Post } from "../../../types/types";

const mockPost: Post = {
  id: 1,
  title: "Test Title",
  body: "Test Body",
  userId: 2,
  tags: ["tag1", "tag2"],
  reactions: 5,
};

const mockOnPress = jest.fn();
const mockOnPressFavorite = jest.fn();

interface PostItemComponentProps {
  isFavorite?: boolean;
  mockPostProp?: Post;
}

const PostItemComponent = ({
  isFavorite = true,
  mockPostProp = mockPost,
}: PostItemComponentProps) => {
  return render(
    <FavoritesProvider>
      <PostItem
        post={mockPostProp}
        onPress={mockOnPress}
        onPressFavorite={mockOnPressFavorite}
        isFavorite={isFavorite}
      />
    </FavoritesProvider>
  );
};

describe("PostItem", () => {
  it("renders correctly", () => {
    // When
    PostItemComponent({});

    // Then
    expect(screen.getByText(mockPost.title)).toBeTruthy();
    expect(screen.getByText("tag1, tag2")).toBeTruthy();
    expect(screen.getByText("Reacciones: 5")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    // When
    PostItemComponent({});
    // Then
    fireEvent.press(screen.getByText(mockPost.title));
    expect(mockOnPress).toHaveBeenCalledWith(mockPost);
  });

  it("calls onPressFavorite when favorite button is pressed", () => {
    // When
    PostItemComponent({ isFavorite: false });

    // Then
    fireEvent.press(screen.getByTestId("non-favorite-icon"));
    expect(mockOnPressFavorite).toHaveBeenCalledWith(mockPost.id);
  });
});
