import React, {useEffect,useRef,useState} from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
// import { AudioContext } from '../navigations/download';

const Playlist = ({navigation,route}) => {
  const [playlistData, setPlayListData] = useState([]);

  const renderPlaylist = (name,idx) =>{
    return(
      <SafeAreaView key = {idx}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist2',{playlist: name})}
            style={{height:"100%",
              elevation:2,
              backgroundColor:"#FFF",
              marginLeft:"5%",
              marginTop: "3%",
              marginBottom:10,
              width:"90%"}}>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
              <View style={{
                  paddingTop:10,
                  paddingBottom:10
                }}>
                  <Text style={{
                      fontWeight:"bold",
                      fontSize: 15,
                  }}>{name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  } 

  useEffect(async()=>{
    const value = await AsyncStorage.getItem('email')
    let data = {
      email: value
    }
    axios
     .post(apiConfig.baseUrl+'/playlistSongs', data)
     .then(res => {
       let x = [];
       res.data.map((val,idx) => {
         x.push(val.playlist)
       });
       setPlayListData(x);
       console.log(playlistData);
     })
     .catch(err => {
       console.log(err);
     })
  },[]);

    return (
      <ScrollView>
        <View>
          {
           playlistData.map((val,idx)=>{
              return renderPlaylist(val,idx);
            })
          }
        </View>
      </ScrollView>
    )
  }

export default Playlist;