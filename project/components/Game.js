import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Board from './Board.js'
import TurnIndicators from './TurnIndicators.js';
import { globalStyles } from '../styles/Global.js';

export default function Game(props) {
  const [state, setState] = useState({
    turnIndicator: 1,
    score: [0,0],
    names: props.names,
  });

  function updateCounter(turns, scoreAdd1, scoreAdd2, tie){
    let nState = Object.assign({}, state);
    nState.turnIndicator = turns;
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
    Alert.alert('Congratutions!', (state.names[id] + ' Won!!'));
  }

  const alertTie = () => {
    Alert.alert('It is a Tie.', 'It be like that');
  }
    return (
      <View style={globalStyles.containerG}>
        <Text style={globalStyles.title}>TIC TAC TOE</Text>
    
        <Board updateCounter={updateCounter} test="It Works"/>
        <TurnIndicators names={state.names} turns={state.turnIndicator} score={state.score}/>
      </View>
    );
 
  
  
}
