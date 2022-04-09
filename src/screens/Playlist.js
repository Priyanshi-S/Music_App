import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'

const Playlist = () => {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
        <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:260}}
                >
            <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail2")}
                        style={{
                            height:230,
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
                            source={require('../images/playlist1.jpg')}
                            style={{
                                height:160,
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
                            }}>English Fav</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:23
                            }}>8 Songs</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail2")}
                        style={{
                            height:230,
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
                            source={require('../images/playlist2.jpg')}
                            style={{
                                height:160,
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
                            }}>Party</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:60
                            }}>5 Songs</Text>
                        </View>
                    </TouchableOpacity>

        </ScrollView>


        <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:365}}
                >
            <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail2")}
                        style={{
                            height:230,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                        }}
                    >
                        <Image
                            source={require('../images/playlist3.jpg')}
                            style={{
                                height:160,
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
                            }}>Old Songs</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:30
                            }}>5 Songs</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail2")}
                        style={{
                            height:230,
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
                            source={require('../images/playlist4.jpg')}
                            style={{
                                height:160,
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
                            }}>Pop</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:64
                            }}>6 Songs</Text>
                        </View>
                    </TouchableOpacity>

        </ScrollView>
        </ScrollView>
        
        
    )
}
export default Playlist;