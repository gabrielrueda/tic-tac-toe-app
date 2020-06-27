import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Global.js';

//Main Function
export default function Board(props) {
    const [state, setState] = useState({
        turnCounter: props.turnCounter,
        symbols: ["","O","X"], // Used to convert number to a symbol 
        //How the board is layed out (exactly like the box array)
        box: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
    });
    //Runs every time a tile is clicked.
    const tileClicked = (y,x) => {
        if(state.box[y][x] == ""){
            let newState = Object.assign({}, state);
            //Checks Whether it is X or O turn
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
                props.scoreUpdater(resetBoard(turnCounter+1), (turnCounter%2), Math.abs((turnCounter % 2)-1), false);
            //Tie
            }else if(final === 2){
                props.scoreUpdater(resetBoard(getRandomInt(2)), 0, 0,true);
            //No Winner Yet
            }else{
                props.scoreUpdater(newState.turnCounter, 0, 0, false);
            } 
           
        }
    };

    //Returns random number from 0 to max
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //Resets the board after every round
    const resetBoard = (turnCounter) => {
        let newState = Object.assign({}, state);
        newState.box = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        newState.turnCounter = turnCounter;
        setState(newState);
        return turnCounter;
    }

    //Runs after every turn
    //Checks whether there is a tie, win, or none.
    const solver = () => {
        let win = 2; //By default does tie
        const tempArray = state.box;
        //Checks which spots are empty and adds a random number to it.
        //the "win" variable changes to 1000 if there is at least one empty spot
        const newArray = tempArray.map(function(arrays){
            return arrays.map(function(item){
                if(item === 0){
                    win = 1000 //This means no winner
                    return (Math.random()+100);
                }else{
                    return item;
                }
            })
        });
        let i = 0;
        //Checks for a Win
        //If a win is detected, the win variable changes to 1 (win)
        newArray.map(function(col){
            //Checks Rows
            if(col[0] === col[1] && col[0] === col[2]){
                win = 1; //This means win
            }
            //Checks Columns
            if(newArray[0][i] === newArray[1][i] && newArray[0][i] === newArray[2][i]){
                win = 1; //This means win
            }
            //Checks Diagonals
            if(newArray[1][1] === newArray[0+i][0] && newArray[1][1] === newArray[2-i][2] && i !== 1){
                win = 1; //This means win
            }
            i++;
        })
        return win; //Returns either 2(tie), 1000(Loss), or 1(Win)
    }

    return(
        <View>
            <View style={globalStyles.grid}>
                {/* Column 1 */}
                <View>
                    <TouchableOpacity onPress={() => tileClicked(0,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(1,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][0]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(2,0)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][0]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 2 */}
                <View>
                    <TouchableOpacity onPress={() => tileClicked(0,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][1]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(1,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][1]]}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(2,1)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][1]]}</Text>
                    </TouchableOpacity>
                </View>
                {/* Column 3 */}
                <View>
                    <TouchableOpacity onPress={() => tileClicked(0,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[0][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(1,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[1][2]]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => tileClicked(2,2)} style={globalStyles.tiles}>
                        <Text style={globalStyles.gamePiece}>{state.symbols[state.box[2][2]]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    
}
