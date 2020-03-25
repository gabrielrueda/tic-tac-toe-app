import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Board from './components/Board.js'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tic Tac Toe</Text>
      <TouchableOpacity>
        <Text style={styles.button}>PLAY</Text>
      </TouchableOpacity> */}
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    margin: 80,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'coral',
    padding: 3,
    fontSize: 24,
  }
});
