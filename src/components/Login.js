import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../screens/styles'
import { apiConfig } from './info'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
     if(email == '' || pass == ''){
        alert("Email and Password are requireed");
        return
     }
     const data = {
       email: email,
       password: pass
     }

     axios
     .post(apiConfig.baseUrl+'/login', data)
     .then(res => {
       res.data ? AsyncStorage.setItem('email',email) : AsyncStorage.setItem('email','');  
       res.data ? this.props.navigation.navigate('Main') : alert("Invalid!!!Username and password");
     })
     .catch(err => {
       console.log(err);
     })
   }

   render() {
      return (
        <SafeAreaView style = {styles.mainscreen}>
        <ImageBackground style={styles.bg} source = {require('../images/login.jpg')}>
          <View style = {{marginBottom: "5%"}}>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Email"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail} />
      
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword} />
            </View>  

            <Pressable style = {styles.next} onPress = {
              () => this.login(this.state.email,this.state.password)} >
              <Text style={styles.white}>Login</Text>
            </Pressable>
            <View style = {styles.stateStyle}>
              <Text style = {styles.stateStyle}>New User?</Text>
              <Pressable style = {[styles.next,{marginTop: "3%"}]}
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Text style = {styles.white}>Register</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </SafeAreaView>
      )
   }
}
export default Inputs
