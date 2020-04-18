import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Board from './Board.js'
import TurnIndicators from './TurnIndicators.js';
import { globalStyles } from '../styles/Global.js';
import Gameover from './Gameover.js';

export default function Game(props) {
  const [state, setState] = useState({
    turnIndicator: 1,
    score: [0,0],
    names: props.names,
    winner: 0,
    screen: 0, // 0 for Board, 1 for Gameover Screen
  });

  function updateCounter(turns, scoreAdd1, scoreAdd2, tie){
    let nState = Object.assign({}, state);
    nState.turnIndicator = turns;
    if(scoreAdd1 > 0 || scoreAdd2 > 0){
      nState.screen = 1;
      nState.score[0] += scoreAdd1;
      nState.score[1] += scoreAdd2;
      nState.winner = scoreAdd1;
    }else if(tie === true){
      nState.screen = 1;
    }
    setState(nState);
  }
  const changeScreen = (id) => {
    if(id === 2){
      props.click(0,state.names);
    }else{
      let nState = Object.assign({}, state);
      nState.screen = id;
      setState(nState);
    }
  }
  // const alertWin = (id) => {
  //   Alert.alert('Congratutions!', (state.names[id] + ' Won!!'));
  // }

  // const alertTie = () => {
  //   Alert.alert('It is a Tie.', 'It be like that');
  // }
  const displayMessage = () =>{
    if(state.screen === 0){
      return <Board updateCounter={updateCounter}/>
    }else{
      return <Gameover winner={state.names[state.winner]} scoreDifference={Math.abs(state.score[0] - state.score[1])}changeScreen={changeScreen}/>
    }
  }
    return (
      <View style={globalStyles.containerG}>
        <Text style={globalStyles.title}>TIC TAC TOE</Text>
    
        {/* <Board updateCounter={updateCounter}/> */}
        <View>{displayMessage()}</View>

        <TurnIndicators names={state.names} turns={state.turnIndicator} score={state.score}/>
      </View>
    );
 
  
  
}
