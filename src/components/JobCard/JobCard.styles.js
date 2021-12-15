import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    margin: 10,
    flexDirection: "row",
    borderRadius: 8,
  },
  body_container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#EAEAEA",
    
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
    fontFamily: "lucida grande",
  },
  company_name:{
   fontSize:16,
   margin: 5,
   marginBottom:10,
  },
  location: {
    flexDirection:'row',
    alignItems:'center',
    fontSize:15,
    fontFamily: "lucida grande",
    paddingLeft:15,
  },
  level: {
    textAlign: "right",
    fontSize: 16,
    color:"#CD1818",
    fontWeight: "bold",
    fontFamily: "lucida grande",
  },
});