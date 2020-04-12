import React, { useState, useEffect } from 'react';
// import renderIf from './renderIf'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function Board(props) {
    const [state, setState] = useState({
        turnCounter: getRandomInt(2),
        symbols: ["","O","X"],
        box: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
    });
    const ClickMe = (y,x) => {
        if(state.box[y][x] == ""){
            let newState = Object.assign({}, state);
            if(state.turnCounter% 2 == 0){
                newState.box[y][x] = 2;
            }else{
                newState.box[y][x] = 1;
            }
            newState.turnCounter++;
            setState(newState);
            let final = solver()
            //WIN!
            if(final === 1){
                let turnCounter = newState.turnCounter-1;
                props.updateCounter(resetBoard(), (turnCounter%2), Math.abs((turnCounter % 2)-1), false);
            //Tie
            }else if(final === 2){
                props.updateCounter(resetBoard(), 0, 0,true);
            //No Winner Yet
            }else{
                props.updateCounter(newState.turnCounter, 0, 0, false);
            } 
           
        }
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const resetBoard = () => {
        let newState = Object.assign({}, state);
        newState.box = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        newState.turnCounter = getRandomInt(2);
        setState(newState);
        return newState.turnCounter;
    }
    const solver = () => {
        let win = 2;
        const tempArray = state.box;
        const newArray = tempArray.map(function(arrays){
            return arrays.map(function(item){
                if(item === 0){
                    win = 1000
                    return (Math.random()+100);
                }else{
                    return item;
                }
            })
        });
        let i = 0
        newArray.map(function(col){
            //Rows
            if(col[0] === col[1] && col[0] === col[2]){
                win = 1;
            }
            //Columns
            if(newArray[0][i] === newArray[1][i] && newArray[0][i] === newArray[2][i]){
                win = 1;
            }
            //Diagonals
            if(newArray[1][1] === newArray[0+i][0] && newArray[1][1] === newArray[2-i][2] && i !== 1){
                win = 1;
            }
            i++;
        })
        return win;
    }

    return(
        <View>
            <View style={globalStyles.grid}>
                {/* Column 1 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][0]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 2 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][1]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][1]]}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][1]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 3 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][2]]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Button title='Reset Board' onPress={resetBoard}></Button> */}
        </View>
    );
    
}
