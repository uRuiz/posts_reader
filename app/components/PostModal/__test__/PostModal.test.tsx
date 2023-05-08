import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { PostModal } from "../PostModal";
import { FavoritesProvider } from "../../../context/FavoritesContext";
import { useGetCommentsById } from "../../../hooks/useGetCommentsById";

const mockPost = {
  id: 1,
  title: "Test Title",
  body: "Test Body",
  userId: 2,
  tags: ["tag1", "tag2"],
  reactions: 5,
};

const mockOnClose = jest.fn();
jest.mock("../../../hooks/useGetCommentsById");

const renderPostModal = () => {
  return render(
    <FavoritesProvider>
      <PostModal post={mockPost} onClose={mockOnClose} />
    </FavoritesProvider>
  );
};

describe("PostModal", () => {
  beforeAll(() => {
    (useGetCommentsById as jest.Mock).mockImplementation(() => ({
      comments: [],
      loading: false,
      error: null,
    }));
  });
  it("renders correctly", () => {
    // When
    renderPostModal();

    // Then
    expect(screen.getByText(mockPost.title)).toBeTruthy();
    expect(screen.getByText(mockPost.body)).toBeTruthy();
    expect(screen.getByText("Tags: tag1, tag2")).toBeTruthy();
    expect(screen.getByText("Reacciones: 5")).toBeTruthy();
  });

  it("calls onClose when close button is pressed", () => {
    renderPostModal();

    // Then
    fireEvent.press(screen.getByText("Cerrar"));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("renders comments", () => {
    // When
    (useGetCommentsById as jest.Mock).mockImplementation(() => ({
      comments: [
        { id: 1, body: "Comment 1" },
        { id: 2, body: "Comment 2" },
      ],
      loading: false,
      error: null,
    }));

    renderPostModal();

    // Then
    expect(screen.getByText("Comment 1")).toBeTruthy();
    expect(screen.getByText("Comment 2")).toBeTruthy();
  });

  it("handles favorite toggle", () => {
    // When
    renderPostModal();

    // Then
    fireEvent.press(screen.getByTestId("non-favorite-icon"));
    expect(screen.getByTestId("favorite-icon")).toBeTruthy();
  });
});
