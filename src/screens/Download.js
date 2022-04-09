import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'

const Download = () => {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
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
                            source={require('../images/pic12.jpg')}
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
                            }}>Butter</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By BTS
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
                            source={require('../images/pic13.jpg')}
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
                            }}>Really</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By BlackPink
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
                            source={require('../images/pic7.jpg')}
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
                            }}>Closer</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By Chainsmokers
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
                            source={require('../images/pic14.jpg')}
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
                            }}>Perfect</Text>
                            
                            <Text style={{
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingLeft:10
                        }}>
                            By Ed Shreen
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
export default Download;