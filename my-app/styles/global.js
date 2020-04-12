import { StyleSheet } from 'react-native';

const constants = require('../Constants.js');

export const globalStyles = StyleSheet.create({
    //General Use
    title: {
        fontSize: 48,
        marginBottom: 30,
        marginTop: 40,
        fontFamily: constants.defaultFont,
        alignSelf: "center"
    },
    gamePiece: {
        alignSelf: 'center',
        fontSize: 67,
        fontFamily: 'underground'
    },
    generalText: {
        fontSize: 24,
        textAlign:"center",
        textAlignVertical:"center",
        fontFamily: "cornerstone",
        marginBottom: 6,
    },
    // StartMenu.js
    button: {
        borderRadius: constants.border.radius,
        borderWidth: constants.border.width,
        borderColor: constants.colour.darkGreen,
        backgroundColor: constants.colour.lightGreen,
        padding: 10,
        fontSize: 48,
        alignSelf: "center",
        width: "80%",
        textAlign: "center",
        fontFamily: constants.defaultFont,
    },
    
    turnIndicatorBox: {
        borderWidth: constants.border.width,
        height: 160,
        width: 130,
        padding: 12,
        backgroundColor: constants.colour.lightGreen,
        borderRadius: constants.border.radius,
        margin: 20,
        justifyContent: 'center',
    },
    vsSign :{
        fontSize: 40,
        fontFamily: "cornerstone",
        marginTop: 75,
    },
    containerTI: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerG: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    
    },
    inputBox: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: constants.colour.darkGreen,
        borderWidth: constants.border.width,
        borderRadius: constants.border.radius,
        backgroundColor: "white",
        marginBottom: 60,
        fontFamily: constants.defaultFont,
    },
    //Board.js
    grid: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: constants.colour.lightGreen,
        borderColor: constants.colour.darkGreen,
        borderWidth: constants.border.width,
        alignSelf: "center",
        borderRadius: constants.border.radius,
    },
    tiles:{
        width: 80,
        height: 80,
        margin: 6,
        backgroundColor: constants.colour.darkGreen,
        borderRadius: constants.border.radius,
    },
})