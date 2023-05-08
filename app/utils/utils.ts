import { Post } from "../types/types";

export const sortPosts = (posts: Post[], favoritePosts: number[]): Post[] => {
  return [...posts].sort((a, b) => {
    const aIsFavorite = favoritePosts.includes(a.id);
    const bIsFavorite = favoritePosts.includes(b.id);

    if (aIsFavorite && !bIsFavorite) {
      return -1;
    }

    if (!aIsFavorite && bIsFavorite) {
      return 1;
    }

    return 0;
  });
};
