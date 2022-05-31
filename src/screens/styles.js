import { StyleSheet } from "react-native";

export default StyleSheet.create ({
  mainscreen: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {
     padding: 4,
     alignItems: 'center',
  },
  white: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
  text: {
     fontSize: 28,
     fontWeight: "bold",
     paddingHorizontal:10,
     fontWeight:"bold",
     color:"black",
     textAlign: "center"
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal:10,
    fontWeight:"bold",
    color:"#FFFFFF",
    textAlign: "center"
 },
  row: {
   minWidth: "48%",
   flexDirection: "row",
   flexWrap: "wrap",
 },
 image: {
   opacity: 0.8,
   minHeight: '21%',
  
 },
 button: {
   borderRadius: 4,
   alignSelf: "flex-start",
   marginHorizontal: "1%",
   marginBottom: 6,
   minWidth: "48%",
   maxWidth: "48%",
   textAlign: "center",
 },
 stateStyle: {
   fontSize: 25,
   justifyContent: "center",
   alignItems: "center",
   marginTop: "5%"
 },
 next: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
 },
 profileImage:{
   height: 200,
   width: 200,
   borderRadius: 100
 },
 name: {
   fontSize: 30
 },
 profile: {
   fontWeight: "bold",
   flexDirection: "row",
   justifyContent: "space-around"
 },
 profileContent: {
   marginTop: "5%",
   fontWeight: "bold",
   justifyContent: "center",
   alignItems: "center"
 },
 input: {
  margin: "3%",
  height: 60,
  borderColor: '#7a42f4',
  borderBottomWidth: 2,
  fontSize:25
 },
 bg:{
   flex: 1,
   justifyContent: "center",
   height: null,
   width: null
 },
})