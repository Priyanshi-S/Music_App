import React, { Component } from 'react'
import { Text, Image, View ,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

class Profile extends Component {

   render() {
     return(
       <SafeAreaView style={{
        backgroundColor:"#C996CC",
        flex:1
    }}>
      
         <View style = {styles.container}>
          <Image style = {styles.profileImage} source={require('../images/profile.jpg')}></Image>
          <Text style = {styles.name}>Welcome Riya</Text>
         </View>
         <View style={{
        backgroundColor:"white",
        width:400,
        borderRadius: 25,
        marginLeft:5}}>
         <View style = {styles.profile}>
           <View style = {styles.profileContent}>
            <Text style = {{fontSize:20}}>PlayLists</Text>
            <Text style = {{fontSize:20}}>1</Text>
           </View>
           <View style = {styles.profileContent}>
            <Text style = {{fontSize:20}}>Followers</Text>
            <Text style = {{fontSize:20}}>2</Text>
           </View>
           <View style = {styles.profileContent}>
            <Text style = {{fontSize:20}}>Following</Text>
            <Text style = {{fontSize:20}}>5</Text>
           </View>
         </View>
         </View>
       </SafeAreaView>
     )
   }
}

export default Profile;