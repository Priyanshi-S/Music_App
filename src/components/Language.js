import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../screens/styles'
import { Icon } from 'react-native-elements/dist/icons/Icon'

class Language extends Component {
   state = {
      languages: [
         {
            id: 0,
            language: 'English',
            selected: false
         },
         {
            id: 1,
            language: 'Hindi',
            selected: false
         },
         {
            id: 2,
            language: 'Bengali',
            selected: false
         },
         {
            id: 3,
            language: 'Punjabi',
            selected: false
         },
         {
          id: 4,
          language: 'Gujrati',
          selected: false
         },
         {
          id: 5,
          language: 'Telugu',
          selected: false
         },
         {
          id: 6,
          language: 'Marathi',
          selected: false
         },
         {
          id: 7,
          language: 'Tamil',
          selected: false
         },
      ]
   }

   data = this.props.route.params.data;

   selectLanguage = (item) => {
     this.setState(prevState => ({
       languages: prevState.languages.map(
         el => el.id === item.id? {...el, selected: !el.selected}:el
       )
     }))
   }

   render() {
      return (
        <SafeAreaView style = {styles.container}>
          <View style = {styles.row} 
           
          >
              {
                this.state.languages.map((item, index) => ( 
                    <TouchableOpacity
                      key = {item.id}
                      style = {styles.button}
                      onPress = {() => this.selectLanguage(item)}>
                      <ImageBackground 
                      source={require("../images/language.jpg")}
                      style={styles.image}>
                      <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style = {styles.text}>
                            {item.language}
                        </Text>
                        <View>
                          {item.selected ? <Icon name="check-circle" type="fontAwesome" color="green" /> : null }
                        </View>
                      </View>
                      </ImageBackground>
                    </TouchableOpacity>
                ))
              }
              </View>
              <Pressable style = {styles.next} onPress={() => this.props.navigation.navigate('Artists',{languages: this.state.languages, data: this.data})} >
                <Text style={styles.white}>Continue</Text>
              </Pressable>
        </SafeAreaView>
      )
   }
}

export default Language