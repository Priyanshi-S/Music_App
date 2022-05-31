import React from 'react'
import {View, Text, Image} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity,SafeAreaView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import { apiConfig } from '../components/info'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import songs from './data';

class Home2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      name: "",
      languages: [],
      recPlaylist: [],
      trendingPlaylist: [],
      suggestedPlaylist: []
    }
  }

  sData = (indexes)=>{
    let song = [];
    indexes.map((val,idx) => {
      let songData = {
       title: songs[val-1].title,
       artist: songs[val-1].artist,
       artwork: songs[val-1].artwork,
       url: songs[val-1].url,
       id: idx+1,
       idx: val
      }
      song.push(songData);
     });
     return song;
  }
  playlist = (val,idx)=>{
    return(
    <SafeAreaView key={idx}>
      <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate("Detail2", {data: this.sData(val)})}
        style={{
            height:250,
            elevation:2,
            backgroundColor:"#FFF",
            marginLeft:20,
            marginTop:20,
            borderRadius:15,
            marginBottom:10,
            width:160
        }}
    >
        <Image
            source={songs[val[0]-1].artwork}
            style={{
                height:200,
                width:160
            }}
        />
        <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10
        }}>
            <Text style={{
                fontWeight:"bold"
            }}>{songs[val[0]-1].title}</Text>
            <Text style={{
                fontWeight:"bold",
                color:"#C996CC",
                paddingLeft:25
            }}>{songs[val[0]-1].language}</Text>
        </View>
        <Text style={{
            paddingHorizontal:10,
            fontWeight:"bold",
            color:"#916BBF",
            paddingTop:3
        }}>
            {songs[val[0]-1].artist}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
   )
  }

  playlistData = (type,mail_id,languages)=> {
    let data = {
      email: mail_id,
      type: type,
      languages: languages
    }
    axios
    .post(apiConfig.baseUrl+'/homePlaylist', data)
    .then(res => {
      if(type=="recommended"){
        this.setState({
          recPlaylist: res.data
        });     
      }
      else if(type == "trending"){
        this.setState({
          trendingPlaylist: res.data
        });
      }
      else if(type=="new"){
        this.setState({
          recPlaylist: res.data
        }); 
      }
      else{
        this.setState({
          suggestedPlaylist: res.data
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('email')
    let data = {
      email: value
    }
    let new_user = false;
    let languages = [];
    axios
      .post(apiConfig.baseUrl+'/details', data)
      .then(res => {
        this.setState({
          email: value,
          name: res.data[0].name,
        });
        res.data[0].languages.map((val,idx)=> {
          languages.push(val.language);
        });
      })
      .catch(err => {
        console.log(err);
      })
      axios
      .post(apiConfig.baseUrl+'/check', data)
      .then(res => {
        if(res.data == false){
          new_user = true;
        }
      new_user ? this.playlistData("new",value,languages) : this.playlistData("recommended",value,languages);
      this.playlistData("trending",value,languages);
      this.playlistData("artists",value,languages);
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
          <View style={{
              backgroundColor:"#C996CC",
              height:"11%",
              borderBottomLeftRadius:10,
              borderBottomRightRadius:20,
              paddingHorizontal:20
          }}>
              <Icon name="music" type="fontAwesome" color="white" size={20}
                    style={{ paddingTop:25 }}/>
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  marginTop:25,
                  width:"100%"
              }}>
                  <View style={{width:"50%"}}>
                      <Text style={{
                          fontSize:28,
                          color:"#FFF",
                          fontWeight:"bold"
                      }}>Hi {this.state.name}</Text>
                  </View>
                  <View style={{width:"50%",alignItems:"flex-end"}}>
                      <Image
                          source={require('../images/profile.jpg')}
                          style={{height:80,width:80}}
                      />
                  </View>
              </View>
          </View>
          <LinearGradient
          colors={["rgba(0,5,90,0.3)", "transparent"]}
          style={{
              //left:0,
              //right:0,
              height:"7%",
              marginTop:"-1%"
          }}
          >
              <View style={{
                  backgroundColor:"#FFF",
                  paddingVertical:8,
                  paddingHorizontal:20,
                  marginHorizontal:20,
                  borderRadius:15,
                  marginTop:"5%",
                  flexDirection:"row",
                  alignItems:"center"
              }}>
                  <TextInput
                      placeholder="Search"
                      placeholderTextColor="#C996CC"
                      style={{
                          fontWeight:"bold",
                          fontSize:18,
                          width:"97%"
                      }}
                  />
                  <Icon name="search" type="fontAwesome" color="black" size={15}
                    style={{ paddingLeft:"3%"}}/>
              </View>
          </LinearGradient>
              <View style={{
                  flexDirection:"row",
                  paddingHorizontal:20,
                  width:"100%",
                  alignItems:"center",
                  marginTop:"5%"
              }}>
                  <View style={{width:"50%"}}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:17,
                          color:"#585a61"
                      }}>Recommended</Text>
                      <View style={{
                          height:4,
                          backgroundColor:"#C996CC",
                          width:115,
                          marginTop:-5
                      }}>
                      </View>
                  </View>
                  <View style={{width:"50%", alignItems:"flex-end"}}>
                      <View style={{
                          backgroundColor:"#C996CC",
                          paddingHorizontal:20,
                          paddingVertical:5,
                          borderRadius:15
                      }}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:13,
                              color:"#FFF"
                          }}>More</Text>
                      </View>
                  </View>
              </View>
              <ScrollView 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{height:365}}
              >
                  <LinearGradient
                      colors={["rgba(0,164,109,0.09)", "transparent"]}
                      style={{
                          position:"absolute",
                          left:0,
                          right:0,
                          height:100,
                          marginTop:220,
                          top:0
                      }}
                  />
                  {
                    this.state.recPlaylist.map((val,idx) => {
                      return this.playlist(val,idx);
                    })
                  }
              </ScrollView>
              <View style={{
                  flexDirection:"row",
                  paddingHorizontal:20,
                  width:"100%",
                  alignItems:"center",
                  marginTop:"5%"
              }}>
                  <View style={{width:"50%"}}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:17,
                          color:"#585a61"
                      }}>Trending</Text>
                      <View style={{
                          height:4,
                          backgroundColor:"#C996CC",
                          width:70,
                          marginTop:-5
                      }}>
                      </View>
                  </View>
                  <View style={{width:"50%", alignItems:"flex-end"}}>
                      <View style={{
                          backgroundColor:"#C996CC",
                          paddingHorizontal:20,
                          paddingVertical:5,
                          borderRadius:15
                      }}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:13,
                              color:"#FFF"
                          }}>More</Text>
                      </View>
                  </View>
              </View>
              <ScrollView 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{height:365}}
              >
                  <LinearGradient
                      colors={["rgba(0,164,109,0.09)", "transparent"]}
                      style={{
                          position:"absolute",
                          left:0,
                          right:0,
                          height:100,
                          marginTop:220,
                          top:0
                      }}
                  />
                  {
                    this.state.trendingPlaylist.map((val,idx) => {
                      return this.playlist(val,idx);
                    })
                  }
              </ScrollView>
              <View style={{
                  flexDirection:"row",
                  paddingHorizontal:20,
                  width:"100%",
                  alignItems:"center",
                  marginTop:"5%"
              }}>
                  <View style={{width:"50%"}}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:17,
                          color:"#585a61"
                      }}>Suggested Artists</Text>
                      <View style={{
                          height:4,
                          backgroundColor:"#C996CC",
                          width:140,
                          marginTop:-5
                      }}>
                      </View>
                  </View>
                  <View style={{width:"50%", alignItems:"flex-end"}}>
                      <View style={{
                          backgroundColor:"#C996CC",
                          paddingHorizontal:20,
                          paddingVertical:5,
                          borderRadius:15
                      }}>
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:13,
                              color:"#FFF"
                          }}>More</Text>
                      </View>
                  </View>
              </View>
              <ScrollView 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{height:365}}
              >
                  <LinearGradient
                      colors={["rgba(0,164,109,0.09)", "transparent"]}
                      style={{
                          position:"absolute",
                          left:0,
                          right:0,
                          height:100,
                          marginTop:220,
                          top:0
                      }}
                  />
                  {
                    this.state.suggestedPlaylist.map((val,idx) => {
                      return this.playlist(val,idx);
                    })
                  }
              </ScrollView>
      </ScrollView>
  )
  }
}

export default Home2;