import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { FavoritesProvider, useFavorites } from "../FavoritesContext";
import { Button, Text } from "react-native";

// Componente de prueba para usar el hook useFavorites
const TestComponent: React.FC = () => {
  const { favoritePosts, toggleFavoritePost } = useFavorites();

  return (
    <>
      {favoritePosts.map((postId) => (
        <Text key={postId} testID={`favorite-post-${postId}`}>
          Post {postId}
        </Text>
      ))}
      <Button
        testID="toggle-favorite-button"
        onPress={() => toggleFavoritePost(1)}
        title="Toggle Favorite"
      />
    </>
  );
};

describe("FavoritesContext", () => {
  it("toggles favorite post", () => {
    const { getByTestId, queryByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    expect(queryByTestId("favorite-post-1")).toBeNull();

    const toggleButton = getByTestId("toggle-favorite-button");
    fireEvent.press(toggleButton);

    expect(getByTestId("favorite-post-1")).toBeTruthy();

    fireEvent.press(toggleButton);

    expect(queryByTestId("favorite-post-1")).toBeNull();
  });
});
