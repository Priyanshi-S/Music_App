import React, {useEffect,useRef,useState} from 'react'
import {SafeAreaView,StyleSheet,View, Text,Image, FlatList, Animated, Dimensions, TouchableOpacity } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import Player from './Player';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Slider from '@react-native-community/slider';
import songs from "./data";
import TrackPlayer, {Capability, Event, RepeatMode, State, usePlaybackState, UsePlaybackState, useProgress, useTrackPlayerEvents} from 'react-native-track-player';
import {requestToPermissions, like, history} from '../navigations/download';
const {width,height} =Dimensions.get('window'); 
import styles1 from './styles1';
import axios from 'axios';
import { apiConfig } from '../components/info'
const song = [];

const setupPlayer= async()=>{
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
        capabilities:[
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ]
    });
    await TrackPlayer.add(songs);
}

const togglePlayback = async(playbackstate)=> {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null){
      let newPosition = await TrackPlayer.getPosition();
      let duration = await TrackPlayer.getDuration();
        if(playbackstate== State.Paused){
            await TrackPlayer.play();
           //history(currentTrack);
        }
        else{
            await TrackPlayer.pause();
        }
    }
}

const Detail = ({navigation}) => {
    const playbackState= usePlaybackState();
    const progress= useProgress();
    const [trackArtwork, setTrackArtwork]= useState();
    const [trackArtist, setTrackArtist]= useState();
    const [trackTitle, setTrackTitle]= useState();

    const scrollX= useRef(new Animated.Value(0)).current;
    const [songIndex,setSongIndex] =useState(0);
    const [repeatMode, setReapeatMode] =useState('off');
    const songSlider= useRef(null);
    const [songIndexes,setSongIndexes] = useState([]);

    useTrackPlayerEvents([Event.PlaybackTrackChanged],async event =>{
        if(event.type=== Event.PlaybackTrackChanged && event.nextTrack !==null){
            const track =await TrackPlayer.getTrack(event.nextTrack);
            const {title, artwork, artist}= track;
            setTrackTitle(title);
            setTrackArtwork(artwork);
            setTrackArtist(artist);
        }
    })

    const repeatIcon=()=>{
        if(repeatMode==='off'){
            return 'repeat-off';
        }
        if(repeatMode==='track'){
            return 'repeat-once';
        }
        if(repeatMode==='repeat'){
            return 'repeat';
        }
    }

    const changeRepeatMode =()=>{
        if(repeatMode==='off'){
            TrackPlayer.setRepeatMode(RepeatMode.Track);
            setReapeatMode('track');
        }
        if(repeatMode==='track'){
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setReapeatMode('repeat');
        }
        if(repeatMode==='repeat'){
            TrackPlayer.setRepeatMode(RepeatMode.Off);
            setReapeatMode('off');
        }
    }
    const skipTo = async (TrackId)=>{
        await TrackPlayer.skip(TrackId);
    }

    useEffect(()=>{
      let data = {
        type: "recommended"
      }
      axios
       .post(apiConfig.baseUrl+'/playlist', data)
       .then(res => {
         let songListIndex = [];
         res.data.map((val,idx) => {
           let songData = {
            title: "Without Me",
            artist: "Halsey",
            artwork: require("../images/pic15.jpg"),
            url: "https://samplesongs.netlify.app/Without%20Me.mp3",
            id: "6",
            idx: val+1
           }
         })
       })
       .catch(err => {
         console.log(err);
       })
      setupPlayer();
      scrollX.addListener(({value})=>{
          // console.log('Scroll X', scrollX);
          // console.log('Device Width', width);
          const index= Math.round(value/width);
          skipTo(index);
          setSongIndex(index);
          // console.log('Index:', index);
      });

      return()=>{
          scrollX.removeAllListeners();
      }
    },[]);

    const skipToNext= ()=>{
        songSlider.current.scrollToOffset({
            offset: (songIndex+1)* width,
        });
    }

    const skipToPrevious= ()=>{
        songSlider.current.scrollToOffset({
            offset: (songIndex-1)* width,
        });
    }

    const renderSongs = ({ index, item })=>{
        return(
            <View style={{
                width:width,
                height:340,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Animated.View style={styles1.artworkWrapper}>
                       <Image
                        source={trackArtwork}
                        style={styles1.artworkImg}
                        />
                </Animated.View>
            </View>
        );
    }

    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"75%"
            }}>
                <View style={{width:"10%",paddingLeft:"2%"}}>
                        <View style={styles1.iconStyle}>
                          <TouchableOpacity onPress={()=> requestToPermissions(songIndexes[songIndex]-1)}>
                            <Icon name="download" type="FontAwesome" color="black" size={30}/>
                          </TouchableOpacity>
                          {/*  <Icon name="microphone" type="FontAwesome" color="black" size={25}/>*/}
                        </View>
                        <View style={styles1.iconStyle}>
                          <TouchableOpacity onPress={()=> like(songIndexes[songIndex]-1)}>
                            <Icon name="heart" type="AntDesign" color="red"  size={25}/>
                          </TouchableOpacity>
                        </View>
                        <View style={styles1.iconStyle}>
                          <TouchableOpacity>
                            <Icon1 name="playlist-add" type="MaterialIcons" color="black"  size={28}/>
                          </TouchableOpacity>  
                        </View>
                        <View 
                        style={styles1.iconStyle}>
                            <TouchableOpacity onPress={changeRepeatMode}>
                                <Icon2 name={`${repeatIcon()}`} color={ repeatMode!=='off'?"black":"#777777"} size={25}/>
                            </TouchableOpacity> 
                        </View> 
                </View>

                <Animated.FlatList 
                ref={songSlider}
                data={songs}
                renderItem={renderSongs}
                keyExtractor={(item)=>item.id}
                horizontal
                pagingEnabled
                scrollEnabled = {false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: { x: scrollX}
                        }
                    }],
                    {useNativeDriver: true}
                )}
                />
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            //marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            
                            
                            <View>
                                <Slider
                                    style= {styles1.progressContainer}
                                    value={progress.position}
                                    minimumValue={0}
                                    maximumValue={progress.duration}
                                    thumbTintColor='#916BBF'
                                    minimumTrackTintColor='#916BBF'
                                    maximumTrackTintColor='#62636a'
                                    onSlidingComplete={async(value)=>{
                                        await TrackPlayer.seekTo(value);
                                    }}
                                   />
                                <View style={styles1.progressLabelContainer}>
                                    <Text style={styles1.ProgressLabelTxt}>
                                        {new Date(progress.position *1000).toISOString().substr(14,5)}
                                    </Text>
                                    <Text style={styles1.ProgressLabelTxt}>
                                        {new Date((progress.duration - progress.position) *1000).toISOString().substr(14,5)}
                                    </Text>
                                </View>
                                <View style={styles1.musicControls}>
                                <TouchableOpacity onPress={skipToPrevious}>
                                <Icon name="step-backward" type="FontAwesome" color="#62636a" size={25}/>
                                </TouchableOpacity> 
                                <TouchableOpacity onPress={()=> togglePlayback(playbackState)}>
                                <Icon name={playbackState===State.Playing ? "pause-circle" : "play-circle"} type="FontAwesome" color="#62636a" size={25}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={skipToNext}>
                                <Icon name="step-forward" type="FontAwesome" color="#62636a" size={25}/>
                                </TouchableOpacity>
                            </View>
                            </View>
                            
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#C996CC",
                            paddingTop:3,
                            fontSize:20
                        }}>
                            {trackArtist}
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
                                    fontSize:20
                                }}>{trackTitle}</Text>
                            </View>
                        </View>
                        
        </SafeAreaView>
    )
}


export default Detail;
