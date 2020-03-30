import React, { useState, useEffect } from 'react';
// import renderIf from './renderIf'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function Board(props) {
    const [state, setState] = useState({
        turnCounter: 1,
        // 1  4  7 
        // 2  5  8
        // 3  6  9
        symbols: ["","O","X"],
        box: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        status: false,
    });
    const borderWidth = 3;
    const ClickMe = (y,x) => {
        if(state.box[y][x] == ""){
            let newState = Object.assign({}, state);
            if(state.turnCounter% 2 == 0){
                newState.box[y][x] = 2;
            }else{
                newState.box[y][x] = 1;
            }
            newState.turnCounter++;
            newState.status = solver().toString();
            setState(newState);
        }
    };
    const updateMain = useEffect(() => {
        props.updateCounter(() => {
            return state.turnCounter;
        });
    });
    const resetBoard = () => {
        let newState = Object.assign({}, state);
        newState.box = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        newState.status = false
        newState.turnCounter = 1
        setState(newState);
    }
    const solver = () => {
        let win = false;
        const tempArray = state.box;
        const newArray = tempArray.map(function(arrays){
            return arrays.map(function(item){
                if(item === 0){
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
                win = true;
            }
            //Columns
            if(newArray[0][i] === newArray[1][i] && newArray[0][i] === newArray[2][i]){
                win = true;
            }
            //Diagonals
            if(newArray[1][1] === newArray[0+i][0] && newArray[1][1] === newArray[2-i][2] && i !== 1){
                win = true;
            }
            i++;
        })
        
        return win;
    }
    return(
        <View style={styles.container}>
            <View style={styles.grid}>
                {/* Column 1 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,0)} style={[{borderRightWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[0][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,0)} style={[{borderRightWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[1][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,0)} style={[{borderRightWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[2][0]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 2 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,1)} style={[{borderBottomWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[0][1]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,1)} style={styles.box}>
                        <Text style={styles.xo}>{state.symbols[state.box[1][1]]}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,1)} style={[{borderTopWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[2][1]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 3 */}
                <View>
                    <TouchableOpacity onPress={() => ClickMe(0,2)} style={[{borderLeftWidth: borderWidth, borderBottomWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[0][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(1,2)} style={[{borderLeftWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[1][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ClickMe(2,2)} style={[{borderLeftWidth: borderWidth, borderTopWidth: borderWidth}, styles.box]}>
                        <Text style={styles.xo}>{state.symbols[state.box[2][2]]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button title='Reset Board' onPress={resetBoard}></Button>
            <Text>{state.status.toString()}</Text>
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
        borderColor: 'black',
        borderWidth: 1,
    },
    xo: {
        alignSelf: 'center',
        fontSize: 40,
    },
    container:{
        flex: 1,
    },
});