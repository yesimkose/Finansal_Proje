import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor:'white',
    
  },
  body_container: {
    backgroundColor: "#EEEEEE",
    width: 400,
    margin: 8,
  },
  image: {
    resizeMode: "contain",
    
    width: 400,
    minHeight: 600,
  },
  title: {
    color: "#6D0303",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
    marginLeft: 20,
    fontFamily: "Cochin",
    
  },
  strArea: {
    padding: 5,
    fontSize: 23,
    color: "#6D0303",
    marginLeft: 20,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  strInstructions: {
    padding: 10,
    margin: 5,
    fontFamily: "Cochin",
    fontSize:18,
  },
});
