import React from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
import songs from './data';

class Favourite2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songListIndex: []
    }
  }
  likesList = (index,idx) => {
    return (
      <SafeAreaView key={idx}>
      <TouchableOpacity
                       // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:100,
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
                            source={songs[index-1].artwork}
                            style={{
                                height:100,
                                width:100
                            }}
                        />
                        <View style={{
                            //flexDirection:"row",
                            paddingLeft:"10%",
                            paddingTop:20
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>{songs[index-1].title}</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:"15%"
                        }}>
                            By {songs[index-1].artist} 
                        </Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    </SafeAreaView>
    )
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem('email')
    //console.log(value);
    let data = {
      email: value
    }
    axios
     .post(apiConfig.baseUrl+'/likedsongs', data)
     .then(res => {
       let songListIndex = [];
       res.data.map((val) => {
         songListIndex.push(val.song_id);
       })
       this.setState({
         songListIndex: songListIndex
       });
     })
     .catch(err => {
       console.log(err);
     })
  }
  render() {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
          {
            this.state.songListIndex.map((val,idx) => {
              return this.likesList(val,idx);
            })
          }
        </ScrollView>
    )
                      }
                      }
export default Favourite2;