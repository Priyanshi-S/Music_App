import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import Swiper from 'react-native-swiper'

const SwiperComponent = () => {
    return(
        <Swiper
            style={StyleSheet.wrapper}
            dotStyle={{
                marginTop:-200,
                width:15,
                height:5,
                borderRadius:10,
                backgroundColor:"#FFF",

            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                marginTop:-200,
                width:30,
                height:6,
                borderRadius:10,
                backgroundColor:"#FFF",
                activeDotColor:"#FFF"

            }}
        >
                <View style={styles.slide}>
                    <Image
                        source={require('../images/pic2.jpg')}
                        style={{
                            marginLeft:140,
                            marginBottom:50,
                            height:350,
                            width:300,
                            marginTop:10,
                            resizeMode:"stretch"
                        }}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../images/pic3.jpg')}
                        style={{
                            marginLeft:140,
                            marginBottom:50,
                            height:350,
                            width:300,
                            marginTop:10,
                            resizeMode:"stretch"
                        }}
                    />
                </View>
               
        </Swiper>
    )
}
const styles = StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }
})
export default SwiperComponent;