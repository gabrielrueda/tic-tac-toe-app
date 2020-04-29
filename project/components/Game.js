import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Board from './Board.js'
import TurnIndicators from './TurnIndicators.js';
import { globalStyles } from '../styles/Global.js';
import Win from './Win.js';
import Tie from './Tie.js';

//Main Function
export default function Game(props) {
  const [state, setState] = useState({
    turnIndicator: 1, // Even for Player 1, Odd for player 2
    score: [0,0], // Overall Score
    names: props.names, 
    winner: 0, //0 for Player 1, 1 for Player 2
    screen: 0, // 0 for Board, 1 for Gameover Screen
  });

  //Runs after every move --> turns increases.
  //Also runs at the end of each turn --> updates score, checks tie, and changes the screen
  function scoreUpdater(turns, scoreAdd1, scoreAdd2, ifTie){
    let nState = Object.assign({}, state);
    nState.turnIndicator = turns;
    if(scoreAdd1 > 0 || scoreAdd2 > 0){
      nState.screen = 1;
      nState.score[0] += scoreAdd1;
      nState.score[1] += scoreAdd2;
      nState.winner = scoreAdd1;
    }else if(ifTie === true){
      nState.screen = 2;
    }
    setState(nState);
  }

  //Runs when buttons "Play again" or "Return home" are clicked at the end of each turn
  const changeScreen = (id) => {
    if(id === 2){
      props.click(0,state.names);
    }else{
      let nState = Object.assign({}, state);
      nState.screen = id;
      setState(nState);
    }
  }

  //Checks whether to display the board, a win screen, or a tie screen.
  //Runs constantly
  const renderScreen = () =>{
    if(state.screen === 0){
      return <Board turnCounter={state.turnIndicator} scoreUpdater={scoreUpdater}/>
    }else if(state.screen === 1){
      //(-) Difference --> Player 1 | (+) Differnce --> Player 2
      return <Win winner={state.names[state.winner]} playerInLead={state.names[(state.score[0] > state.score[1] ? 1 : 0)]} scoreDifference={Math.abs(state.score[0] - state.score[1])} changeScreen={changeScreen}/>
    }else{
      return <Tie playerInLead={state.names[(state.score[0] > state.score[1] ? 1 : 0)]} scoreDifference={Math.abs(state.score[0] - state.score[1])} changeScreen={changeScreen}/>
    }
  }

    return (
      <View style={globalStyles.containerG}>
        <Text style={globalStyles.title}>TIC TAC TOE</Text>
        <View>{renderScreen()}</View>
        {/* Turn Indicators is the two bottom rectangles */}
        <TurnIndicators names={state.names} turns={state.turnIndicator} score={state.score}/>
      </View>
    );
 
  
  
}
