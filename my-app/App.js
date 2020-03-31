import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Board from './components/Board.js'
import TurnIndicators from './components/TurnIndicators.js';

export default function App() {
  const [state, setState] = useState({
    turnsZ: 1,
    score: [0,0],
  });

  function updateCounter(turns, scoreAdd1, scoreAdd2){
    let nState = Object.assign({}, state);
    nState.turnsZ = turns;
    nState.score[0] += scoreAdd1;
    nState.score[1] += scoreAdd2;
    setState(nState);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tic Tac Toe</Text> */}
      {/* <TouchableOpacity>
        <Text style={styles.button}>PLAY</Text>
      </TouchableOpacity> */}
      <Text>{state.turnsZ}</Text>
  
      <Board updateCounter={updateCounter} test="It Works"/>
      <TurnIndicators turns={state.turnsZ} score={state.score}/>
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
