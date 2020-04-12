import React, { Component, useState } from 'react';
//For react-navigation 4.0+
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Game2 from './components/Game2';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => {
  return Font.loadAsync({
    'cornerstone': require('./assets/fonts/Cornerstone.ttf'),
    'underground': require('./assets/fonts/UndergroundNF.ttf'),
  });
}

export default function App(){
  const [state, setState] = useState({
    screen: 0,
    fontsLoaded: false,
    names: ["Player 1 "," Player 2"],
  });
 
  const nameChange = (name1,name2) => {
      let nState = Object.assign({}, state);
      nState.names = [name1, name2];
      setState(nState);
  }
  
  const screenChange = (id,names) => {
    let nState = Object.assign({}, state);
    nState.screen = id;
    nState.names = names;
    setState(nState);
  }

  const display = () => {
    if(state.screen === 0){
      return <StartMenu nameChange={nameChange} click={screenChange}/>
    }else{
      return <Game names={state.names}/>
    }
  }
  if(state.fontsLoaded){
    return(
    <View style={styles.container}>{display()}</View>
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
    backgroundColor: "#B1DEDE",
    flex: 1,
    },
});



  