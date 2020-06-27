import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js');

export default function Win(props){
    //This function returns the message of who is winning and by how much
    const soFarMessage = () => {
        if(props.scoreDifference === 0){
            return <Text style={[globalStyles.generalText, localStyles.text]}>So far no one is winning. It's a tie.</Text>
        }else{
            return <Text style={[globalStyles.generalText, localStyles.text]}>So far {props.playerInLead} is winning by {props.scoreDifference} points.</Text>
        }
    }
    return(
        <View style={globalStyles.containerGO}>
            <Text style={[globalStyles.titleWinTieScreen, {fontSize: (constants.width < 390 ? (40 * (constants.width / 390)) : 40)}]}>CONGRATS!</Text>
            <Text style={[globalStyles.generalText , localStyles.text]}>{props.winner} Won!!</Text>
            <View>{soFarMessage()}</View>

            {/* Play Again Button */}
            <TouchableOpacity onPress={() => props.changeScreen(0)}>
                <Text style={[globalStyles.button, localStyles.text]}>PLAY AGAIN</Text>
            </TouchableOpacity>

            {/* Return Home Button */}
            <TouchableOpacity onPress={() => props.changeScreen(2)}>
                <Text style={[globalStyles.button, localStyles.text]}>RETURN HOME</Text>
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    text: {
        fontSize: (constants.width < 390 ? (18 * (constants.width / 390)) : 18),
        margin: 4,
    }
});