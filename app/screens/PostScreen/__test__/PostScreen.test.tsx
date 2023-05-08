import React from "react";
import { render, screen } from "@testing-library/react-native";
import { PostsScreen } from "../PostsScreen";
import { useGetPosts } from "../../../hooks/useGetPosts";
import { useFavorites } from "../../../context/FavoritesContext";

jest.mock("../../../hooks/useGetPosts");
jest.mock("../../../context/FavoritesContext");

describe("PostsScreen", () => {
  beforeEach(() => {
    (useGetPosts as jest.Mock).mockReturnValue({
      posts: [],
      error: null,
      isLoading: false,
      hasMore: true,
    });

    (useFavorites as jest.Mock).mockReturnValue({
      favoritePosts: [],
      toggleFavoritePost: jest.fn(),
    });
  });

  it("renders the PostsScreen without errors", () => {
    render(<PostsScreen />);
    expect(screen.getByTestId("posts-screen-container")).toBeDefined();
  });
});
