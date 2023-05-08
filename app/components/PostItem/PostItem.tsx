import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Post } from "../../types/types";
import { useFavorites } from "../../context/FavoritesContext";
import styles from "./styles";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

interface PostItemProps {
  post: Post;
  onPress: (post: Post) => void;
  onPressFavorite: (postId: number) => void;
}

export const PostItem: React.FC<PostItemProps> = memo(
  ({ post, onPress, onPressFavorite }) => {
    const { id, title, tags, reactions } = post;
    const { favoritePosts } = useFavorites();
    const isFavorite = favoritePosts.includes(id);
    return (
      <TouchableOpacity onPress={() => onPress(post)}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tags}>{tags.join(", ")}</Text>
          <View style={styles.textContainer}>
            <FavoriteButton
              isFavorite={isFavorite}
              onPress={() => onPressFavorite(id)}
            />
            <Text style={styles.reactionsContainer}>
              Reacciones: {reactions}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);
