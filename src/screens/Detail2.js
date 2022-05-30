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
import {requestToPermissions, like, addToPlaylist} from '../navigations/download';
import Playlist2 from './Playlist2';


const {width,height} =Dimensions.get('window'); 



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
        if(playbackstate== State.Paused){
            await TrackPlayer.play();
        }
        else{
            await TrackPlayer.pause();
        }
    }
}

const Detail = ({ navigation }) => {
    const playbackState= usePlaybackState();
    const progress= useProgress();
    const [trackArtwork, setTrackArtwork]= useState();
    const [trackArtist, setTrackArtist]= useState();
    const [trackTitle, setTrackTitle]= useState();

    const scrollX= useRef(new Animated.Value(0)).current;
    const [songIndex,setSongIndex] =useState(0);
    const [repeatMode, setReapeatMode] =useState('off');
    const songSlider= useRef(null);
    
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
        setupPlayer();
        scrollX.addListener(({value})=>{
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
            offset: (songIndex + 1)* width,
        });
    }

    const skipToPrevious= ()=>{
        songSlider.current.scrollToOffset({
            offset: (songIndex - 1)* width,
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
                <Animated.View style={styles.artworkWrapper}>
                       <Image
                        source={trackArtwork}
                        style={styles.artworkImg}
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
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:40
                        }}>
                          <TouchableOpacity onPress={()=> requestToPermissions(songIndex)}>
                            <Icon name="download" type="FontAwesome" color="black" size={30}/>
                          </TouchableOpacity>
                          {/*  <Icon name="microphone" type="FontAwesome" color="black" size={25}/>*/}
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:40
                        }}>
                          <TouchableOpacity onPress={()=> like(songIndex)}>
                            <Icon name="heart" type="AntDesign" color="red"  size={25}/>
                          </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:40
                        }}>
                            <TouchableOpacity onPress={
                                ()=> {
                                    addToPlaylist(songIndex) 
                                    navigation.navigate("Playlist3")}}>
                            {/* <TouchableOpacity onPress={()=> addToPlaylist(songIndex)}> */}
                            <Icon1 name="playlist-add" type="MaterialIcons" color="black"  size={28}/>
                            </TouchableOpacity>
                        </View>
                        <View 
                        style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:40
                        }}>
                            <TouchableOpacity
                            
                            onPress={changeRepeatMode}
                                >
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
                                    style= {styles.progressContainer}
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
                                <View style={styles.progressLabelContainer}>
                                    <Text style={styles.ProgressLabelTxt}>
                                        {new Date(progress.position *1000).toISOString().substr(14,5)}
                                    </Text>
                                    <Text style={styles.ProgressLabelTxt}>
                                        {new Date((progress.duration - progress.position) *1000).toISOString().substr(14,5)}
                                    </Text>
                                </View>
                                <View style={styles.musicControls}>
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
                                <TouchableOpacity onPress={()=> togglePlayback(playbackState)}>
                                {playbackState===State.Playing ?
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Pause</Text> 
                                :
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Play Now</Text> }
                                </TouchableOpacity>
                                
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      
    },
    artworkWrapper:{
        alignItems:'center',
        justifyContent:'center',
        height:300,
        width:300,
        marginTop:40,
        shadowColor:'#ccc',
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowOpacity:0.5,
        shadowRadius:3.84,
        elevation:5
    },
    artworkImg:{
        width:'100%',
        height:'100%',
        borderRadius:15
    },
    progressContainer:{
        width:340,
        height:50,
        marginTop:15,
        marginLeft:30,
        flexDirection:'row'
    },
    progressLabelContainer:{
        width:350,
        paddingLeft:50,
        paddingRight:"5%",
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    ProgressLabelTxt:{
        color:'#62636a'
    },
    musicControls:{
        flexDirection: 'row',
        width: '60%',
        justifyContent:'space-between',
        marginTop:5,
        paddingLeft:100,
        marginLeft:45
    },
  });
