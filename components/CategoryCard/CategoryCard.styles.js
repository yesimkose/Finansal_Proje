import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C9CCD5",
    margin: 10,
    flexDirection: "row",
    backgroundColor: "#F3F1F5",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  body_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "#F3F1F5",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginRight:5,
  },
  title: {
    fontSize: 20,
    padding:35,
    fontFamily: "Cochin",
  },
});
