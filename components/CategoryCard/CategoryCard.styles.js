import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopStartRadius:(Platform.OS==='android')?50:50,
    margin: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    
    overflow: "hidden",

  },
  body_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "#f38310",
    borderBottomRightRadius: 50,
    marginRight:5,
    borderRadius:(Platform.OS === 'android')?50:50,
   
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    padding:35,
  },
});
