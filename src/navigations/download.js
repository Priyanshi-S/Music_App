import React, { Component, createContext } from 'react';
import songs from "../screens/data";
import { PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiConfig } from '../components/info';


// export const AudioContext = createContext();
var RNFS = require('react-native-fs');

// export class download extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     playList: [],
//     addToPlayList: null,
//   };
// }
// render() {
//   const {
//     playList,
//     addToPlayList,
    
//   } = this.state;  
 
//   return (
//     <AudioContext.Provider
//       value={{
//         playList,
//         addToPlayList,
//       }}
//     >
//       {this.props.children}
//     </AudioContext.Provider>
//   );
// }
// }

// export default download;

export const requestToPermissions = async (songIndex) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Music',
          message: 'App needs access to your Files... ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('startDownload...');
        startDownload(songIndex);
      }
    } catch (err) {
      console.log(err);
    }
  };


const startDownload = async (currentTrackIndex) => {
    let url = songs[currentTrackIndex].url;
    let name = songs[currentTrackIndex].title;
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: name,
        path: RNFetchBlob.fs.dirs.DownloadDir +"/" + `${name}`, // Android platform
        description: 'Downloading the file',
      },
    })
      .fetch('GET', url)
      .then(res => {
        console.log('The file is save to ', res.path());
      });

    if(verifyFiles(RNFetchBlob.fs.dirs.DownloadDir +"/" + `${name}`)){
      try {
        const value = await AsyncStorage.getItem('email')
        data = {
          email: value,
          song_id: songs[currentTrackIndex].id,
          title: name
        }
        console.log(data);
      }
      catch(err) {
        console.log(err);
      }
      axios
      .post(apiConfig.baseUrl+'/downloaded', data)
      .then(res => {
        res.data ? null : alert("Try Again");
      })
      .catch(err => {
        console.log(err);
      })
    }
  };

async function verifyFiles(filepath) {
    let exists = await RNFS.exists(filepath);
    return exists; // true or false
}

export const like = async (currentTrackIndex) => {
  let name = songs[currentTrackIndex].title;
  try {
    const value = await AsyncStorage.getItem('email')
    data = {
      email: value,
      song_id: songs[currentTrackIndex].id,
      title: name
    }
    console.log(data);
  }
  catch(err) {
    console.log(err);
  }
    axios
    .post(apiConfig.baseUrl+'/likes', data)
    .then(res => {
      res.data ? null : alert("Try Again");
    })
    .catch(err => {
      console.log(err);
    })
};

export const addToPlaylist = async (currentTrackIndex,playlistName) => {
  try {
    const value = await AsyncStorage.getItem('email')
    const data = {
      email: value,
      playlist: playlistName,
      index: currentTrackIndex+1
    }
    console.log(data);
    axios
    .post(apiConfig.baseUrl+'/playlist', data)
    .then(res => {
      res.data ? null : alert("Try Again");
    })
    .catch(err => {
      console.log(err);
    })
  }
  catch(err) {
    console.log(err);
  }
};

export const history = async (currentTrackIndex) => {
  let name = songs[currentTrackIndex].title;
  try {
    const value = await AsyncStorage.getItem('email')
    data = {
      email: value,
      song_id: songs[currentTrackIndex].id,
      title: name
    }
    console.log(data);
  }
  catch(err) {
    console.log(err);
  }
    axios
    .post(apiConfig.baseUrl+'/history', data)
    .then(res => {
      res.data ? null : alert("Try Again");
    })
    .catch(err => {
      console.log(err);
    })
};
