import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../screens/styles'
import { Icon } from 'react-native-elements/dist/icons/Icon'

class Artist extends Component {
   state = {
      artists: [
         {
            id: 0,
            artist: 'Justin Beiber',
            selected: false,
            picture:require("../images/justin.jpg"),
         },
         {
            id: 1,
            artist: 'Dua Lipa',
            selected: false,
            picture:require("../images/dua.jpg"),
         },
         {
            id: 2,
            artist: 'Neha Kakkar',
            selected: false,
            picture:require("../images/neha.jpg"),
         },
         {
            id: 3,
            artist: 'Arman Malik',
            selected: false,
            picture:require("../images/arman.jpg"),
         },
         {
          id: 4,
          artist: 'BTS',
          selected: false,
          picture:require("../images/bts.jpg"),
         },
         {
          id: 5,
          artist: 'Ariana Grand',
          selected: false,
          picture:require("../images/ariana.jpg"),
         },
         {
          id: 6,
          artist: 'Billie Eilish',
          selected: false,
          picture:require("../images/eilish.jpg"),
         },
         {
          id: 7,
          artist: 'Atif Aslam',
          selected: false,
          picture:require("../images/atif.jpg"),
         },
      ]
   }

   language = this.props.route.params.languages;
   data = this.props.route.params.data;

   selectArtist = (item) => {
     this.setState(prevState => ({
       artists: prevState.artists.map(
         el => el.id === item.id? {...el, selected: !el.selected}:el
       )
     }))
   }

   render() {
      return (
        <SafeAreaView style = {styles.container}>
          <View style = {styles.row}> 
              {
                this.state.artists.map((item, index) => (
                    <TouchableOpacity
                      key = {item.id}
                      style = {styles.button}
                      onPress = {() => this.selectArtist(item)}>
                      <ImageBackground
                      source={item.picture}
                      style={styles.image}>
                      <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style = {styles.text1}>
                            {item.artist}
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
         <Pressable style = {styles.next} onPress={() => this.props.navigation.navigate('Genre', {artists: this.state.artists, languages: this.language, data: this.data})} >
            <Text style={styles.white}>Continue</Text>
          </Pressable>
        </SafeAreaView>
      )
   }
}

export default Artist;