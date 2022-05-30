import React, { useState, useContext } from 'react'
import {View, Text, Image, SafeAreaView ,ImageBackground,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiConfig } from '../components/info'
import songs from './data';
import styles1 from './styles1';
import PlayListInputModal from './PlayListInputModal';
// import { AudioContext } from '../navigations/download';

const Playlist3 = ({  }) => {
  const [modalVisible,setModalVisible]=useState(false);

  const [showPlayList, setShowPlayList] = useState(false);


  const createPlayList = async playListName => {
    const result = await AsyncStorage.getItem('playlist');
    console.log(result)
    setModalVisible(false);
  };
  
    return (
      <ScrollView>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                        <Text>
                            Add new Playlist
                        </Text>
                    </TouchableOpacity>
                    <PlayListInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={createPlayList}
      />
                    </ScrollView>
                    
    )
  }

export default Playlist3;