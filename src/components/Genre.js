import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../screens/styles'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import axios from 'axios'
import { apiConfig } from './info'

class Genre extends Component {
   state = {
      genres: [
         {
            id: 0,
            genre: 'Rock',
            selected: false
         },
         {
            id: 1,
            genre: 'Folk',
            selected: false
         },
         {
            id: 2,
            genre: 'Pop',
            selected: false
         },
         {
            id: 3,
            genre: 'Blues',
            selected: false
         },
         {
          id: 4,
          genre: 'Jazz',
          selected: false
         },
         {
          id: 5,
          genre: 'Punk Rock',
          selected: false
         },
         {
          id: 6,
          genre: 'Hip Hop',
          selected: false
         },
         {
          id: 7,
          genre: 'Heavy Metal',
          selected: false
         },
      ]
   }

   artist = this.props.route.params.artists.filter(function(item){
        return item.selected == true;
      }).map(function({id, artist}){
          return {id, artist};
    });

    language = this.props.route.params.languages.filter(function(item){
      return item.selected == true;
    }).map(function({id, language}){
        return {id, language};
    });

    user_info = this.props.route.params.data;

    register = () => {

    const genre = this.state.genres.filter(function(item){
       return item.selected == true;
     }).map(function({id, genre}){
         return {id, genre};
     });

     const data = {
       name: this.user_info.name,
       phone: this.user_info.phone,
       email: this.user_info.email,
       password: this.user_info.password,
       languages: this.language,
       artists: this.artist,
       genres: genre
     }

     console.log(data);
     axios
       .post(apiConfig.baseUrl+'/register', data)
       .then(res => {
         console.log(res);
         res.data ? this.props.navigation.navigate('Main') : alert("Error!!! Please try again");
       })
       .catch(err => {
         console.log(err);
       })
    }

   selectGenre = (item) => {
     this.setState(prevState => ({
       genres: prevState.genres.map(
         el => el.id === item.id? {...el, selected: !el.selected}:el
       )
     }))
   }

   render() {
      return (
        <SafeAreaView style = {styles.container}>
          <View style = {styles.row}> 
              {
                this.state.genres.map((item, index) => (
                    <TouchableOpacity
                      key = {item.id}
                      style = {styles.button}
                      onPress = {() => this.selectGenre(item)}>
                      <ImageBackground
                      source={require("../images/genre.jpg")}
                      style={styles.image} >
                      <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style = {styles.text1}>
                            {item.genre}
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
          <TouchableOpacity style = {styles.next} onPress = {this.register} >
            <Text style={styles.white}>Continue</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )
   }
}

export default Genre