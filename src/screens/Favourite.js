import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'

const Favourite = () => {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
            <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
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
                            source={require('../images/pic2.jpg')}
                            style={{
                                height:100,
                                width:100
                            }}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingLeft:60,
                            paddingTop:20
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Stay</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By Justin Beiber
                        </Text>
                        </View>
                        </View>
                        
                    </TouchableOpacity>
            
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
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
                            source={require('../images/pic5.jpg')}
                            style={{
                                height:100,
                                width:100
                            }}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingLeft:60,
                            paddingTop:20
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Death Bed</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By Powfu
                        </Text>
                        </View>
                        </View>
                        
                    </TouchableOpacity>

        </ScrollView>
        
    )
}
export default Favourite;