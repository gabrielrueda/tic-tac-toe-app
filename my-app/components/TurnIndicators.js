import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function TurnIndicators() {
    const [state, setState] = useState({
        name: 'Gabriel',
        wins: [0,0],
    });
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.profContainer}> 
                    <Image style={styles.img} 
                    // Image Does not work
                        source={require('../assets/x.png')}
                    />
                    <Text style={styles.name}>{state.name}</Text>
                    <Text style={styles.name}>{state.wins[0]}</Text>
                </View>
                <Text style={styles.name}>Your Turn</Text>
            </View>
            <Text>VS</Text>
            <View>
                <View style={styles.profContainer}> 
                    <Image style={styles.img} 
                    // Image Does not work
                        source={require('../assets/o.png')}
                    />
                    <Text style={styles.name}>Computer</Text>
                    <Text style={styles.name}>{state.wins[0]}</Text>
                </View>
                <Text style={styles.name}>Your Turn</Text>
            </View>
        </View>
    );
}
const img_size = 40;
const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: 'black',
        borderWidth: 1,
        width: "100%",
        // alignContent: "space-between",
    },
    img: {
        width: img_size,
        height: img_size,
        alignSelf: 'center',
    },
    profContainer: {
        borderColor: 'black',
        borderWidth: 3,
        height: 150,
        padding: 12,
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
    },
});