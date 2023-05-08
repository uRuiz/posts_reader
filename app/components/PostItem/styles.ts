import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 4,
    marginVertical: 20,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tags: {
    marginTop: 10,
    fontSize: 12,
    fontStyle: "italic",
  },
  textContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactionsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
  },
});
