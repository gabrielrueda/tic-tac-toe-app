import React, { useState } from 'react';
// import renderIf from './renderIf'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function Board() {
    const [state, setState] = useState({
        turnCounter: 1,
        // 1  4  7 
        // 2  5  8
        // 3  6  9
        box: ["", "", "", "", "", "", "", "", ""],
        status: "no winner"
    });
    const borderWidth = 3;
    const ClickMe = (id) => {
        if(state.box[(id-1)] == ""){
            let newState = Object.assign({}, state);
            if(state.turnCounter% 2 == 0){
                newState.box[(id-1)] = "X";
            }else{
                newState.box[(id-1)] = "O";
            }

            newState.turnCounter++;
            setState(newState);
            checkWin("X");
        }
    };
    //Decrease all the numbers inside box[...] by 1 when finished
    const checkWin = (sym) => {
        // if(state.box[5] == sym){
            
        // }
        for(var i = 0; i<state.box.length; i++){
            console.log(i)
        }
    }
    const resetBoard = () => {
        let newState = Object.assign({}, state);
        newState.box = ["", "", "", "", "", "", "", "", ""];
        setState(newState);
    }
    return(
        <View style={styles.grid}>
            <View>
                <TouchableOpacity onPress={() => ClickMe(1)} style={[{borderRightWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(2)} style={[{borderRightWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(3)} style={[{borderRightWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[2]}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => ClickMe(4)} style={[{borderBottomWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[3]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(5)} style={styles.box}>
                    <Text style={styles.xo}>{state.box[4]}</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(6)} style={[{borderTopWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[5]}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => ClickMe(7)} style={[{borderLeftWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[6]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(8)} style={[{borderLeftWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[7]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ClickMe(9)} style={[{borderLeftWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}>
                    <Text style={styles.xo}>{state.box[8]}</Text>
                </TouchableOpacity>
            </View>
            <Button title='Reset Board' onPress={resetBoard}></Button>
                <Text>{state.status}</Text>
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
    },
    xo: {
        alignSelf: 'center',
        fontSize: 40,
    }
});