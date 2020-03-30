import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Board from './components/Board.js'
import TurnIndicators from './components/TurnIndicators.js';

export default function App() {
  const [state, setState] = useState({
    tInd: 3,
  });

  function updateCounter(value){
    let nState = Object.assign({}, state);
    nState.tInd = value;
    setState(nState);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tic Tac Toe</Text> */}
      {/* <TouchableOpacity>
        <Text style={styles.button}>PLAY</Text>
      </TouchableOpacity> */}
      <Text>{state.tInd}</Text>
      <Board updateCounter={updateCounter} test="It Works"/>
      <TurnIndicators props={state.tInd}/>
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
