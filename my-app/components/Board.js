import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Board() {
    const borderWidth = 3;
    return(
        <View style={styles.grid}>
            <View>
                <View style={[{borderRightWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}></View>
                <View style={[{borderRightWidth: borderWidth}, styles.box]}></View>
                <View style={[{borderRightWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}></View>
            </View>
            <View>
                <View style={[{borderBottomWidth: borderWidth}, styles.box]}></View>
                <View style={styles.box}></View>
                <View style={[{borderTopWidth: borderWidth}, styles.box]}></View>
            </View>
            <View>
                <View style={[{borderLeftWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}></View>
                <View style={[{borderLeftWidth: borderWidth}, styles.box]}></View>
                <View style={[{borderLeftWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        borderColor: 'black',
        width: 60,
        height: 60,
        backgroundColor: 'gray',
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
    }
});