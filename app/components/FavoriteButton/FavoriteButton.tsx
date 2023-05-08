import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

export interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress?: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
}) => {
  const iconName = isFavorite ? "heart" : "heart-outline";
  const iconColor = "pink";
  const testID = isFavorite ? "favorite-icon" : "non-favorite-icon";

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      <Ionicons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};
