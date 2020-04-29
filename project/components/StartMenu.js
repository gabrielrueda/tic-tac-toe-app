import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Button, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js')

// Main function
export default function StartMenu(props) {
    //State contains all of the variables
    const [state, setState] = useState({
        names: ["",""]
    });

    // Updates the names array and checks for character limit
    const updateNames = (val,id) => {
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
            {/* Title */}
            <Text numberOfLines={1} style={globalStyles.title}>Tic Tac Toe</Text>
             {/* Player 1 Text Box */}
            <Text style={globalStyles.generalText}>Player 1 Name:</Text>
            <TextInput
                placeholder="max 10 characters"
                style={globalStyles.inputBox}
                onChangeText={text => updateNames(text,0)}
                value={state.names[0]}
            />
            {/* Player 2 Text Box */}
            <Text style={globalStyles.generalText}>Player 2 Name:</Text>
            <TextInput
                placeholder="max 10 characters"
                style={globalStyles.inputBox}
                onChangeText={text => updateNames(text,1)}
                value={state.names[1]}
            />
            {/* Play Button */}
            <TouchableOpacity onPress={() => props.click(1,state.names)}>
                <Text style={globalStyles.button}>PLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

