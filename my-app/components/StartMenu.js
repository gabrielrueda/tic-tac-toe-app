import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function StartMenu(props) {
    return(
        <View>
            <Text style={styles.title}>Tic Tac Toe</Text> 
            <TouchableOpacity onPress={props.click}>
                <Text style={styles.button}>PLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        margin: 40,
      },
      button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'coral',
        padding: 3,
        fontSize: 24,
      }
});