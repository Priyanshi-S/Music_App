import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './Player';

export default function Detail1() {
  return (
    <View style={styles.container}>
      <Player/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C996CC',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});