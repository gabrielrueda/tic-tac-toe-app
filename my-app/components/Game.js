import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Board from './Board.js'
import TurnIndicators from './TurnIndicators.js';
import StartMenu from './StartMenu.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => {
  return Font.loadAsync({
    'cornerstone': require('../assets/fonts/Cornerstone.ttf'),
  });
}

export default function Game() {
  const [state, setState] = useState({
    turnsZ: 1,
    score: [0,0],
    names: ["Gabriel","Fred"],
    fontsLoaded: false,
  });

  function updateCounter(turns, scoreAdd1, scoreAdd2, tie){
    let nState = Object.assign({}, state);
    nState.turnsZ = turns;
    if(scoreAdd1 > 0 || scoreAdd2 > 0){
      alertWin(scoreAdd1);
      nState.score[0] += scoreAdd1;
      nState.score[1] += scoreAdd2;
    }else if(tie === true){
      alertTie();
    }
    setState(nState);
  }

  const alertWin = (id) => {
    Alert.alert('Congratutions!', (state.names[1] + ' Won!!'));
  }

  const alertTie = () => {
    Alert.alert('It is a Tie.', 'It be like that');
  }
  if(state.fontsLoaded){
    return (
      <View style={styles.container}>
        {/* <StartMenu /> */}
        <Text style={styles.title}>TIC TAC TOE</Text>
    
        <Board updateCounter={updateCounter} test="It Works"/>
        <TurnIndicators turns={state.turnsZ} score={state.score}/>
      </View>
    );
  }else{
    return(
    <AppLoading 
      startAsync={getFonts}
      onFinish={() => {
        let nState = Object.assign({}, state);
        nState.fontsLoaded = true;
        setState(nState);
      }}
    />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 48,
    marginTop: 23,
    marginBottom: 2,
    alignSelf: "center",
    fontFamily: "cornerstone",
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'coral',
    padding: 3,
    fontSize: 24,
  }
});
