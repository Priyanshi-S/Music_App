import React,{useEffect} from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import TrackPlayer, { usePlaybackState,Event} from "react-native-track-player";
export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  useEffect(() => {
  }, [playbackState])
const renderPlayPauseBtn =()=>{}

  const onPlayPause = () => {
    if (playbackState === 'playing') {
      TrackPlayer.pause();
    } else if (playbackState === 'paused') {
      TrackPlayer.play();
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <MaterialIcons name="skip-previous" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        <MaterialIcons name="pause" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <MaterialIcons name="skip-next" size={45} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});