import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Board from './Board.js'
import TurnIndicators from './TurnIndicators.js';
import { globalStyles } from '../styles/Global.js';
import Win from './Win.js';
import Tie from './Tie.js';

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
      nState.screen = 2;
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

  const displayMessage = () =>{
    if(state.screen === 0){
      return <Board updateCounter={updateCounter}/>
    }else if(state.screen === 1){
      //(-) Difference --> Player 1 | (+) Differnce --> Player 2
      return <Win winner={state.names[state.winner]} playerInLead={state.names[checkInLead(state.score[0],state.score[1])]} scoreDifference={Math.abs(state.score[0] - state.score[1])}changeScreen={changeScreen}/>
    }else{
      return <Tie playerInLead={state.names[checkInLead(state.score[0],state.score[1])]} scoreDifference={Math.abs(state.score[0] - state.score[1])}changeScreen={changeScreen}/>
    }
  }
  const checkInLead = (s1,s2) => {
    if(s1 > s2){
      return 1
    }else{
      return 0
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
