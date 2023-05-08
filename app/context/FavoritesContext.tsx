import React, { createContext, useState, useContext } from "react";

interface FavoritesContextData {
  favoritePosts: number[];
  toggleFavoritePost: (postId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favoritePosts, setFavoritePosts] = useState<number[]>([]);

  const toggleFavoritePost = (postId: number) => {
    setFavoritePosts((prevFavorites) =>
      prevFavorites.includes(postId)
        ? prevFavorites.filter((id) => id !== postId)
        : [...prevFavorites, postId]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoritePosts, toggleFavoritePost }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextData => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites debe ser usado dentro de un FavoritesProvider"
    );
  }
  return context;
};
