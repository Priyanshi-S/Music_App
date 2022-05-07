import React, { Component } from 'react'
import { Text, Image, View ,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
const Profile = ({navigation}) => { 

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

         <View>
            <TouchableOpacity 
                        onPress={()=>navigation.navigate("Download")}
                        style={{
                            height:120,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:370
                        }}>
                        <View style={{flexDirection:"row"}}>
                        <Image
                            source={require('../images/downloads.jpg')}
                            style={{
                                height:120,
                                width:120
                            }}
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingLeft:60,
                            paddingTop:40
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                            }}>YOUR DOWNLOADS</Text>
                            
                        </View>
                        </View>
                        
                    </TouchableOpacity>
            


         </View>
       </SafeAreaView>
     )
                    }

export default Profile;