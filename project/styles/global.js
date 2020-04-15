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
    
    turnIndicatorBox: {
        borderWidth: constants.borderWidth,
        height: 160,
        width: 130,
        padding: 12,
        backgroundColor: constants.lightGreen,
        borderRadius: constants.borderRadius,
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
        width: constants.width,
    
    },
    inputBox: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: constants.darkGreen,
        borderWidth: constants.borderWidth,
        borderRadius: constants.borderRadius,
        backgroundColor: "white",
        marginBottom: 60,
        fontFamily: constants.defaultFont,
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
})
