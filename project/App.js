import React, { Component, useState } from 'react';
//For react-navigation 4.0+
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import { StyleSheet, View, Text, Alert } from 'react-native';
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

  //When "PLAY" is pressed or "Return Home" is pressed
  const screenChange = (id,names) => {
    if(names[0].toUpperCase() === names[1].toUpperCase() || names[0].trim() === "" || names[1].trim() === ""){
      Alert.alert('Same Name or No Name!', 'Each player must have a unique name.');
    }else{
      let nState = Object.assign({}, state);
      nState.screen = id;
      nState.names = names;
      setState(nState);
    }
  }

  const display = () => {
    if(state.screen === 0){
      return <StartMenu click={screenChange}/>
    }else{
      return <Game click={screenChange} names={state.names}/>
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



