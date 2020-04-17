import { StyleSheet } from 'react-native';

const constants = require('../Constants.js');

export const globalStyles = StyleSheet.create({
    //General Use
    title: {
        fontSize: (constants.width < 390 ? (48 * (constants.width / 390)) : 48),
        marginBottom: 30,
        marginTop: 40,
        fontFamily: constants.defaultFont,
        alignSelf: "center"
    },
    gamePiece: {
        alignSelf: 'center',
        fontSize: (constants.width < 390 ? (67 * (constants.width / 390)) : 67),
        fontFamily: 'underground'
    },
    generalText: {
        fontSize: (constants.width < 390 ? (24 * (constants.width / 390)) : 24),
        textAlign:"center",
        textAlignVertical:"center",
        fontFamily: "cornerstone",
        marginBottom: (constants.width < 390 ? (6 * (constants.width / 390)) : 6),
    },
    inputBox: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        fontSize: (constants.width < 390 ? (24 * (constants.width / 390)) : 24),
        borderColor: constants.darkGreen,
        borderWidth: constants.borderWidth,
        borderRadius: constants.borderRadius,
        backgroundColor: "white",
        marginBottom: 60,
        fontFamily: constants.defaultFont,
    },
    // StartMenu.js
    button: {
        borderRadius: constants.borderRadius,
        borderWidth: constants.borderWidth,
        borderColor: constants.darkGreen,
        backgroundColor: constants.lightGreen,
        padding: 10,
        fontSize: 48,
        alignSelf: "center",
        width: "80%",
        textAlign: "center",
        fontFamily: constants.defaultFont,
    },
    //Turn Indicator.js
    turnIndicatorBox: {
        borderWidth: constants.borderWidth,
        height: (constants.width < 390 ? (160 * (constants.width / 390)) : 160),
        width: (constants.width < 390 ? (130 * (constants.width / 390)) : 130),
        padding: (constants.width < 390 ? (12 * (constants.width / 390)) : 12),
        backgroundColor: constants.lightGreen,
        borderRadius: constants.borderRadius,
        margin: (constants.width < 390 ? (20 * (constants.width / 390)) : 20),
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
        width: constants.width,
    },
    //Game.js
    containerG: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        width: constants.width,
    
    },
    //Board.js
    grid: {
        flexDirection: 'row',
        alignSelf: "center",
        marginBottom: 5,
        backgroundColor: constants.lightGreen,
        borderColor: constants.darkGreen,
        borderWidth: constants.borderWidth,
        marginHorizontal: (constants.width < 390 ? (57 * (constants.width / 390)) : 57),
        borderRadius: constants.borderRadius,
    },
    tiles:{
        width: (constants.width < 390 ? (80 * (constants.width / 390)) : 80),
        height: (constants.width < 390 ? (80 * (constants.width / 390)) : 80),
        margin: (constants.width < 390 ? (6 * (constants.width / 390)) : 6),
        backgroundColor: constants.darkGreen,
        borderRadius: constants.borderRadius,
    },
    //Gameover.js
    containerGO: {
        backgroundColor: constants.lightBlue,
        borderRadius: constants.borderRadius,
        borderColor: constants.darkGreen,
        borderWidth: constants.borderWidth,
        margin: 30, 
        padding: 10,
    }
})
