import { StyleSheet } from "react-native";

export default StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
  artworkWrapper:{
      alignItems:'center',
      justifyContent:'center',
      height:300,
      width:300,
      marginTop:40,
      shadowColor:'#ccc',
      shadowOffset:{
          width:5,
          height:5,
      },
      shadowOpacity:0.5,
      shadowRadius:3.84,
      elevation:5
  },
  artworkImg:{
      width:'100%',
      height:'100%',
      borderRadius:15
  },
  progressContainer:{
      width:340,
      height:50,
      marginTop:15,
      marginLeft:30,
      flexDirection:'row'
  },
  progressLabelContainer:{
      width:350,
      paddingLeft:50,
      paddingRight:"5%",
      justifyContent: 'space-between',
      flexDirection:'row'
  },
  ProgressLabelTxt:{
      color:'#62636a'
  },
  musicControls:{
      flexDirection: 'row',
      width: '60%',
      justifyContent:'space-between',
      marginTop:5,
      paddingLeft:100,
      marginLeft:45
  },
  iconStyle:{
      backgroundColor:"#FFF",
      height:50,
      width:50,
      borderRadius:5,
      elevation:5,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40
  },
  listView:{
    height:100,
    elevation:2,
    backgroundColor:"#FFF",
    marginLeft:"5%",
    marginTop:"5%",
    borderRadius:15,
    marginBottom:10,
    width:"94%"
  },
  profileInfo:{
    backgroundColor:"white",
    width:"96%",
    borderRadius: 25,
    marginLeft:"2%",
    marginRight:"2%"}
})