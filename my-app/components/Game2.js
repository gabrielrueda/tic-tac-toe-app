import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import TurnIndicators from './TurnIndicators';
import Board from './Board';

export default function Game2(){
    const updateCounter = () => {
        
    };
    return(
        <View style={styles.container}>
            {/* <Text>NONONONONO</Text> */}
            <Board updateCounter={updateCounter} test="It Works"/>
            <TurnIndicators turns={2} score={[1,2]}/>
            {/* <Text>YESSS</Text> */}
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
});