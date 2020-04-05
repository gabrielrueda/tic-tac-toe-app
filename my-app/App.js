import React, { Component, useState } from 'react';
//For react-navigation 4.0+
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import { StyleSheet, View } from 'react-native';
import Game2 from './components/Game2';

//import all the screens we are going to switch 
// const App = createStackNavigator({
//   //Constant which holds all the screens like index of any book 
//     FirstPage: { screen: StartMenu }, 
//     //First entry by default be our first screen if we do not define initialRouteName
//     SecondPage: { screen: Game }, 
//   },
//   {
//     initialRouteName: 'FirstPage',
//   }
// );
// export default createAppContainer(App);

// class App extends React.Component{
//   render() {
//     return ( <View> {this.displa()} </View> );
// }
// }
export default function App(){
  const [state, setState] = useState(0)
  const screenChange = (id) => {
    setState(id);
  }

  const display = () => {
    if(state === 0){
      return <StartMenu click={screenChange}/>
    }else{
      return <Game />
    }
  }
    return(
    <View>{display()}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    padding: 30,
    position: "relative"
    },
});