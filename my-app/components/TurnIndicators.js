import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function TurnIndicators(props) {
    const [state, setState] = useState({
        name: 'Gabriel',
        turnText: ["Your Turn", "", "Your Turn"],
    });
    const b_color = (status) => {
        if(props.turns % 2 === status){ return "green"; }else{ return "blue"; }
          
    }
    return(
        <View style={styles.container}>
            <View>
                <View style={[styles.profContainer, {borderColor:b_color(1)}]}> 
                    <Image style={styles.img} 
                    // Image Does not work
                        source={require('../assets/x.png')}
                    />
                    <Text style={styles.name}>{state.name}</Text>
                    <Text style={styles.name}>{props.score[1]}</Text>
                </View>
                <Text style={styles.name}>{state.turnText[(props.turns % 2)+1]}</Text>
            </View>
            <Text>VS</Text>
            <View>
                <View style={[styles.profContainer, {borderColor:b_color(0)}]}> 
                    <Image style={styles.img} 
                    // Image Does not work
                        source={require('../assets/o.png')}
                    />
                    <Text style={styles.name}>Computer</Text>
                    <Text style={styles.name}>{props.score[0]}</Text>
                </View>
                <Text style={styles.name}>{state.turnText[(props.turns % 2)]}</Text>
            </View>
        </View>
    );
}
const img_size = 40;
const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: "cornerstone",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: 'black',
        borderWidth: 1,
        width: "100%",
        backgroundColor: "red",
        height: 100
        // alignContent: "space-between",
    },
    img: {
        width: img_size,
        height: img_size,
        alignSelf: 'center',
    },
    profContainer: {
        borderWidth: 3,
        height: 150,
        padding: 12,
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
    },
});