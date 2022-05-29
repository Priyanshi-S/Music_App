import React from 'react'
import {View, Text, Image} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import { apiConfig } from '../components/info'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

    async componentDidMount() {
      const value = await AsyncStorage.getItem('email')
      let data = {
        email: value
      }
      axios
       .post(apiConfig.baseUrl+'/details', data)
       .then(res => {
         this.setState({
           name: res.data[0].name
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
                left:0,
                right:0,
                height:100,
                marginTop:-5
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#C996CC"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Icon name="search" type="fontAwesome" color="black" size={15}
                      style={{ paddingLeft:50}}/>
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
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
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Detail2")}
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
                            source={require('../images/pic2.jpg')}
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
                            }}>Stay</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:60
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Justin Beiber
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Detail2")}
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
                            source={require('../images/pic5.jpg')}
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
                            }}>Death Bed</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:20
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Powfu
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Detail2")}
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
                            source={require('../images/pic4.jpg')}
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
                            }}>My Universe</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:25
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Cold Play, BTS
                        </Text>
                    </TouchableOpacity>

                </ScrollView>            


                
                <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
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
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Detail2")}
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
                            source={require('../images/pic6.jpg')}
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
                            }}>Levitating</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:35
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Dua Lipa
                        </Text>
                    </TouchableOpacity>

                    <View 
                         onPress={()=>this.props.navigation.navigate("Detail2")}
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
                            source={require('../images/pic7.jpg')}
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
                            }}>Closer</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:45
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Chainsmokers
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>this.props.navigation.navigate("Detail")}
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
                            source={require('../images/pic8.jpg')}
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
                            }}>Bad Habits</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:35
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Ed Shreen
                        </Text>
                    </View>

                </ScrollView>            


                

                

                <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
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
                    style={{height:280}}
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
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate("Detail")}
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
                            source={require('../images/pic9.jpg')}
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
                            }}>Deja Vu</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:35
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Olivia
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>this.props.navigation.navigate("Detail")}
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
                            source={require('../images/pic10.jpg')}
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
                            }}>ME!</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:45
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Taylor Swift
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>this.props.navigation.navigate("Detail")}
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
                            source={require('../images/pic11.jpg')}
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
                            }}>Peaches</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#C996CC",
                                paddingLeft:35
                            }}>English</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#916BBF",
                            paddingTop:3
                        }}>
                            Justin Beiber
                        </Text>
                    </View>

                </ScrollView>            


                








                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:80,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Enjoy</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#C996CC",
                            width:42,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-50}}
                >
                    <Image
                        source={require("../images/img1.jpg")}
                        style={{marginTop:20,marginHorizontal:20,
                            height:200,
                            width:200}}
                    />
                     <Image
                        source={require("../images/img2.jpg")}
                        style={{marginTop:20,borderRadius:10,
                            height:200,
                            width:200}}
                    />
                </ScrollView>
        </ScrollView>
    )
    }
  }

export default Home2;