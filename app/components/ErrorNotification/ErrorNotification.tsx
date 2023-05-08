import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ErrorNotificationProps {
  error: unknown;
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  error,
}) => {
  const errorMessage = generateErrorMessage(error);
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const generateErrorMessage = (error: unknown): string => {
  if (typeof error === "string") {
    return error;
  }

  return "Ha ocurrido un error al cargar los datos";
};
