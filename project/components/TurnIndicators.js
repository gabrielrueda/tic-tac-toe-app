import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js')
export default function TurnIndicators(props) {
    const [state, setState] = useState({
        name: props.names,
        turnText: ["", "Your Turn"],
    });
    const b_color = (status) => {
        if(props.turns % 2 === status){ return lightGreen; }else{ return darkGreen; }
    }
    const getFontSize = (id) => {
        //Font Size relative to length:
        //                 0  1  2  3  4  5  6  7  8  9  10
        let fontSizes = [24,24,24,24,24,24,24,24,21,18,17]
        return (constants.width < 390 ? (fontSizes[id] * (constants.width / 390)) : fontSizes[id]);
    };

    return(
        <View style={globalStyles.containerTI}>
            <View>
                <View style={[globalStyles.turnIndicatorBox, {borderColor:b_color(1)}]}> 
                    <Text style={globalStyles.gamePiece}>X</Text>
                    <Text style={[globalStyles.generalText, {fontSize:getFontSize(state.name[0].length)}]}>{state.name[0]}</Text>
                    <Text style={globalStyles.generalText}>{props.score[1]}</Text>
                </View>
                <Text style={globalStyles.generalText}>{state.turnText[Math.abs((props.turns % 2)-1)]}</Text>
            </View>
            <Text style={globalStyles.vsSign}>VS</Text>
            <View>
                <View style={[globalStyles.turnIndicatorBox, {borderColor:b_color(0)}]}> 
                    <Text style={globalStyles.gamePiece}>O</Text>
                    <Text style={[globalStyles.generalText, {fontSize:getFontSize(state.name[0].length)}]}>{state.name[1]}</Text>
                    <Text style={globalStyles.generalText}>{props.score[0]}</Text>
                </View>
                <Text style={globalStyles.generalText}>{state.turnText[(props.turns % 2)]}</Text>
            </View>
        </View>
    );
}
const lightGreen = "#1AC999";
const darkGreen = "#067146";

