import React from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
import songs from './data';
import styles1 from './styles1';

class Playlist2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songListIndex: [],
      name: this.props.route.params.playlist
    }
  }
  playlistList = (index,idx) => {
    return (
      <SafeAreaView key={idx}>
      <TouchableOpacity
        // onPress={()=>navigation.navigate("Detail")}
        style={styles1.listView}>
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
    let data = {
      email: value,
      playlist: this.state.name
    }
    axios
     .post(apiConfig.baseUrl+'/playlistData', data)
     .then(res => {
       this.setState({
         songListIndex: res.data[0].index
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
              return this.playlistList(val,idx);
            })
          }
        </ScrollView>
    )
  }
}
export default Playlist2;