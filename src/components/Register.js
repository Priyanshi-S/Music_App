import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../screens/styles'

class Register extends Component {
   state = {
      name: '',
      email: '',
      password: '',
      phone: '',
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handleName = (text) => {
     this.setState({ name: text })
   }
   handlePhone = (text) => {
    this.setState({ phone: text })
  }

   render() {
      return (
        <SafeAreaView style = {styles.mainscreen}>
        <ImageBackground style={styles.bg} source = {require('../images/register1.jpg')}>
          <View style = {{marginBottom: "5%"}}>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Name"
                placeholderTextColor = "white"
                autoCapitalize = "none"
                onChangeText = {this.handleName}/>

              <TextInput style = {styles.input }
                underlineColorAndroid = "transparent"
                placeholder = "Enter Phone No."
                placeholderTextColor = "white"
                autoCapitalize = "none"
                onChangeText = {this.handlePhone}/>

              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Email"
                placeholderTextColor = "white"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
      
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Password"
                placeholderTextColor = "white"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
            </View>  

            <Pressable style = {styles.next} onPress = {
              () => this.props.navigation.navigate('Language', {data: this.state})} >
              <Text style={styles.white}>Submit</Text>
            </Pressable>
          </ImageBackground>
        </SafeAreaView>
      )
   }
}

export default Register
