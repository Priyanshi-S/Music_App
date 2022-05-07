import React from 'react'
import {StyleSheet,View, Text,Image } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import { TouchableOpacity } from 'react-native'
import Player from './Player';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// import Slider from '@react-native-community/slider'
const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"90%"
            }}>
                <View style={{width:"10%",paddingLeft:20}}>
                       
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Icon name="microphone" type="FontAwesome" color="black" size={25}/>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Icon name="heart" type="AntDesign" color="red"  size={25}/>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Icon1 name="playlist-add" type="MaterialIcons" color="black"  size={28}/>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Icon name="volume-down" type="FontAwesome" color="black" size={25}/>
                        </View>  
                </View>
                <View style={{width:"90%"}}>
                        <SwiperComponent/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                color:"#62636a"
                            }}>
                                Stay
                            </Text>
                            
                            {/* <View>
                                <Slider></Slider>
                            </View> */}
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#C996CC",
                            paddingTop:3,
                            fontSize:20
                        }}>
                            Justin Beiber
                        </Text>

                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:"#C996CC",
                                height:70,
                                marginTop:20,
                                borderTopRightRadius:25,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Play Now</Text>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#C996CC",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>Add in Playlist</Text>
                            </View>
                        </View>
                        
        </View>
    )
}


export default Detail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
    },
  });