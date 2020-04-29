import React, { Component, useState } from 'react';
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const constants = require('./Constants.js')

//Loads the Fonts
const getFonts = () => {
  return Font.loadAsync({
    'cornerstone': require('./assets/fonts/Cornerstone.ttf'),
    'underground': require('./assets/fonts/UndergroundNF.ttf'),
  });
}

// Main Function
export default function App(){
  //State contains all of the variables
  const [state, setState] = useState({
    screen: 0, //0 is for start menu, 1 is for the game itself
    fontsLoaded: false,
    names: ["Player 1 "," Player 2"],
  });

  //When "PLAY" is pressed or "Return Home" is pressed
  const screenChange = (id,names) => {
    //Checks whether names are the same or when no name is typed
    if(names[0].toUpperCase() === names[1].toUpperCase() || names[0].trim() === "" || names[1].trim() === ""){
      Alert.alert('Same Name or No Name!', 'Each player must have a unique name.');
    }else{
      let nState = Object.assign({}, state);
      nState.screen = id;
      nState.names = names;
      setState(nState);
    }
  }

  //Function which determines what screen to show (start menu or game itself)
  const display = () => {
    if(state.screen === 0){
      return <StartMenu click={screenChange}/>
    }else{
      return <Game click={screenChange} names={state.names}/>
    }

  }
  //Checks whether fonts are loaded --> loads them if not
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

//Local Stylesheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B1DEDE",
    flex: 1,
    },
});



