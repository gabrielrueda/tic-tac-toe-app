import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/Global.js';

const constants = require('../Constants.js');

export default function Gameover(props){
    
    return(
        <View style={globalStyles.containerGO}>
            <Text style={[globalStyles.title, {marginVertical: 5, fontSize: (constants.width < 390 ? (40 * (constants.width / 390)) : 40)}]}>CONGRATS!</Text>
            <Text style={[globalStyles.generalText , localStyles.text]}>{props.winner} Won!!</Text>
            <Text style={[globalStyles.generalText, localStyles.text]}>So far Gabriel is winning by {props.scoreDifference} points.</Text>
            <TouchableOpacity onPress={() => props.changeScreen(0)}>
                <Text style={[globalStyles.button, localStyles.text]}>PLAY AGAIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.changeScreen(2)}>
                <Text style={[globalStyles.button, localStyles.text]}>RETURN HOME</Text>
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    text: {
        fontSize: 18,
        margin: 4,
    }
});