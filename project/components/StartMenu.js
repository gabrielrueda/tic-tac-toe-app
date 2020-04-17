import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput, Alert, Dimensions } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js');

export default function StartMenu(props) {
    const [state, setState] = useState({
        names: ["",""]
    });

    const detectChange = (val,id) => {
        if(val.length <= 10){
          let nState = Object.assign({}, state);
          nState.names[id] = val;
          setState(nState);
        }else{
          Alert.alert('Too Many Characters!', 'The limit is 10.');
        }
    }

    return(
        <View style={{marginHorizontal: 20}}> 
            <Text numberOfLines={1} style={globalStyles.title}>Tic Tac Toe</Text> 
            <Text style={globalStyles.generalText}>Player 1 Name:</Text>
            <TextInput
                placeholder="max 10 characters"
                style={globalStyles.inputBox}
                onChangeText={text => detectChange(text,0)}
                value={state.names[0]}
            />
            <Text style={globalStyles.generalText}>Player 2 Name:</Text>
            <TextInput
                placeholder="max 10 characters"
                style={globalStyles.inputBox}
                onChangeText={text => detectChange(text,1)}
                value={state.names[1]}
            />
            <TouchableOpacity onPress={() => props.click(1,state.names)}>
                <Text style={globalStyles.button}>PLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

