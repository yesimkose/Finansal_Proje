import { Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:"column",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode:'contain',
    margin:12,
    width: 390,
    minHeight: 600,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "#000000",
    padding:15,
    fontFamily: "Cochin",

  }
})