import React, { Component } from 'react'
import { Text, Image, View ,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { apiConfig } from '../components/info'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles1 from './styles1'

class Profile2 extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('email')
    let data = {
      email: value
    }
    axios
     .post(apiConfig.baseUrl+'/details', data)
     .then(res => {
       this.setState({
         name: res.data[0].name
       });
     })
     .catch(err => {
       console.log(err);
     })
  }

  render() {
     return(
       <SafeAreaView style={{ backgroundColor:"#C996CC", flex:1 }}>
         <View style = {styles.container}>
          <Image style = {styles.profileImage} source={require('../images/profile.jpg')}></Image>
          <Text style = {styles.name}>Welcome {this.state.name}</Text>
         </View>
         <View style={styles1.profileInfo}>
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
                        onPress={()=>this.props.navigation.navigate("Download")}
                        style={styles1.listView}>
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
                            paddingLeft:"5%",
                            paddingTop:"12%"
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
                  }

export default Profile2;