import React from "react";
import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import { Comment, Post } from "../../types/types";
import { useGetCommentsById } from "../../hooks/useGetCommentsById";
import { useFavorites } from "../../context/FavoritesContext";
import { ErrorNotification } from "../ErrorNotification/ErrorNotification";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { styles } from "./styles";
import { Button } from "../Button/Button";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

interface PostModalProps {
  onClose: () => void;
  post: Post;
}

export const PostModal: React.FC<PostModalProps> = ({ onClose, post }) => {
  const { id, title, body, reactions, tags } = post;
  const { comments, loading, error } = useGetCommentsById(id);
  const { favoritePosts, toggleFavoritePost } = useFavorites();

  const isFavorite = favoritePosts.includes(id);

  const handleToggleFavorite = () => {
    toggleFavoritePost(id);
  };
  if (loading) {
    return <LoadingSpinner style={styles.spinnerContainer} />;
  }

  if (error) {
    return <ErrorNotification error={error} />;
  }

  return (
    <Modal onRequestClose={onClose} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{body}</Text>
        <Text>Comentarios:</Text>
        {comments &&
          comments.map((comment: Comment) => (
            <Text key={comment.id}>{comment.body}</Text>
          ))}
        <Text>Tags: {tags.join(", ")}</Text>
        <Text>Reacciones: {reactions}</Text>
        <FavoriteButton
          onPress={handleToggleFavorite}
          isFavorite={isFavorite}
        />

        <Button onPress={onClose}>Cerrar</Button>
      </View>
    </Modal>
  );
};
