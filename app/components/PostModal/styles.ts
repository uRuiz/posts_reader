import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  spinnerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 40,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
