import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Board from './components/Board.js'
import TurnIndicators from './components/TurnIndicators.js';

export default function App() {
  const [state, setState] = useState(1);

  function updateCounter(value){
    setState(value);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tic Tac Toe</Text> */}
      {/* <TouchableOpacity>
        <Text style={styles.button}>PLAY</Text>
      </TouchableOpacity> */}
      <Text>{state}</Text>
      <Board updateCounter={updateCounter} test="It Works"/>
      <TurnIndicators />
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
    margin: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'coral',
    padding: 3,
    fontSize: 24,
  }
});
