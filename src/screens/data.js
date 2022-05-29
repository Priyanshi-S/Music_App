import AsyncStorage from '@react-native-async-storage/async-storage'

AsyncStorage.setItem('email','');

const songs = [
    {
      title: "death bed",
      artist: "Powfu",
      artwork: require("../images/pic5.jpg"),
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      id: "1",
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork: require("../images/pic6.jpg"),
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      id: "2"
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork: require("../images/pic7.jpg"),
      url: "https://samplesongs.netlify.app/Faded.mp3",
      id: "3"
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork: require("../images/pic8.jpg"),
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      id: "4"
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork: require("../images/pic9.jpg"),
      url: "https://samplesongs.netlify.app/Solo.mp3",
      id: "5"
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork: require("../images/pic15.jpg"),
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
      id: "6"
    },
    {
      title: "Closer",
      artist: "The Chainsmokers",
      artwork: require("../images/pic7.jpg"),
      url: "https://github.com/Priyanshi-S/Music_App/blob/main/src/songs/Closer.mp3?raw=true",
      id: "7"
    },
    {
      title: "Don't Start Now",
      artist: "Dua Lipa",
      artwork: require("../images/pic10.jpg"),
      url: "https://github.com/Priyanshi-S/Music_App/blob/main/src/songs/Dont_Start_Now.mp3?raw=true",
      id: "8"
    }
  ]
  export default songs;
