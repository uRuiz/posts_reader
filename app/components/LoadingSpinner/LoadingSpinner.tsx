import { ActivityIndicator, View, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

interface CustomComponentProps {
  style?: ViewStyle;
}
export const LoadingSpinner: React.FC<CustomComponentProps> = ({ style }) => {
  return (
    <View style={style} testID="loading-spinner-container">
      <Text style={styles.text}>Cargando</Text>
      <ActivityIndicator size="large" testID="activity-indicator" />
    </View>
  );
};
