import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js')

//Main Function
export default function TurnIndicators(props) {
    const [state, setState] = useState({
        name: props.names,
        turnLabel: ["", "Your Turn"], // The "Your Turn" will be shown to the player whose turn it is, the other player will return ""
    });
    //The colour of the border is based on who's turn it is
    const getBorderColour = (status) => {
        if(props.turns % 2 === status){ return constants.lightGreen; }else{ return constants.darkGreen; }
    }

    //The font size is based on character length of the name
    const getFontSize = (id) => {
        //Font Size relative to length:
        //                 0  1  2  3  4  5  6  7  8  9  10
        let fontSizes = [24,24,24,24,24,24,24,24,21,18,17]
        return (constants.width < 390 ? (fontSizes[id] * (constants.width / 390)) : fontSizes[id]);
    };

    return(
        <View style={globalStyles.containerTI}>
            {/* The Player 1 Box */}
            <View>
                <View style={[globalStyles.turnIndicatorBox, {borderColor:getBorderColour(1)}]}> 
                    <Text style={globalStyles.gamePiece}>X</Text>
                    <Text style={[globalStyles.generalText, {fontSize:getFontSize(state.name[0].length)}]}>{state.name[0]}</Text>
                    <Text style={globalStyles.generalText}>{props.score[1]}</Text>
                </View>
                <Text style={globalStyles.generalText}>{state.turnLabel[Math.abs((props.turns % 2)-1)]}</Text>
            </View>

            {/* The "VS" */}
            <Text style={globalStyles.vsSign}>VS</Text>

            {/* The Player 2 Box */}
            <View>
                <View style={[globalStyles.turnIndicatorBox, {borderColor:getBorderColour(0)}]}> 
                    <Text style={globalStyles.gamePiece}>O</Text>
                    <Text style={[globalStyles.generalText, {fontSize:getFontSize(state.name[1].length)}]}>{state.name[1]}</Text>
                    <Text style={globalStyles.generalText}>{props.score[0]}</Text>
                </View>
                <Text style={globalStyles.generalText}>{state.turnLabel[(props.turns % 2)]}</Text>
            </View>
        </View>
    );
}
