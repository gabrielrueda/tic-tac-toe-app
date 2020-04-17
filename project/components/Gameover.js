import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/Global.js';

export default function Gameover(){
    
    return(
        <View style={globalStyles.containerGO}>
            <Text style={[globalStyles.title, {marginVertical: 15}]}>CONGRATS!</Text>
            <Text style={[globalStyles.generalText , localStyles.text]}>Gabriel Won!!</Text>
            <Text style={[globalStyles.generalText, localStyles.text]}>So far Gabriel is winning by 5 points.</Text>
            <TouchableOpacity>
                <Text style={[globalStyles.button, localStyles.text]}>PLAY AGAIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[globalStyles.button, localStyles.text]}>RETURN HOME</Text>
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 5,
    }
});