import React, {useEffect,useRef,useState} from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
import songs from './data';
import styles from './styles';
import styles1 from './styles1';
import PlayListInputModal from './PlayListInputModal';
import { addToPlaylist } from '../navigations/download';
import Icon from 'react-native-vector-icons/FontAwesome';
import { add } from 'react-native-reanimated';
// import { AudioContext } from '../navigations/download';

const Playlist3 = ({navigation,route}) => {
  const [modalVisible,setModalVisible]=useState(false);
  const [showPlayList, setShowPlayList] = useState(false);
  const index = route.params.index;
  const [playlistData, setPlayListData] = useState([]);

  const createPlayList = async playListName => {
    const result = playListName;
    setModalVisible(false);
    add(result);
  };
  
  const add = (name)=>{
    addToPlaylist(index,name)
  }

  const renderPlaylist = (name,idx) =>{
    return(
      <SafeAreaView key = {idx}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => add(name)}
            style={{height:"100%",
              elevation:2,
              backgroundColor:"#FFF",
              marginLeft:"5%",
              marginTop: "3%",
              marginBottom:10,
              width:"90%"}}>
            <View style={{flexDirection:"row"}}>
              <View style={{
                  paddingLeft:"10%",
                  paddingTop:20,
                }}>
                  <Text style={{
                      fontWeight:"bold",
                      fontSize: 15,
                  }}>{name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  } 

  useEffect(async()=>{
    const value = await AsyncStorage.getItem('email')
    let data = {
      email: value
    }
    axios
     .post(apiConfig.baseUrl+'/playlistSongs', data)
     .then(res => {
       let x = [];
       res.data.map((val,idx) => {
         x.push(val.playlist)
       });
       setPlayListData(x);
       console.log(playlistData);
     })
     .catch(err => {
       console.log(err);
     })
  },[]);

    return (
      <ScrollView>
        <TouchableOpacity onPress={()=> setModalVisible(true)}>
            <Text style = {[styles.text,{marginTop:"5%"}]}>
            <Icon name="plus" type="FontAwesome" color="black" size={30}/>Add new Playlist
            </Text>
        </TouchableOpacity>
        <PlayListInputModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={createPlayList}
        />
        <View>
          {
           playlistData.map((val,idx)=>{
              return renderPlaylist(val,idx);
            })
          }
        </View>
      </ScrollView>
    )
  }

export default Playlist3;