import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: 'yellow',
        height: 430,
    },
    monthRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
    },
    month: {
        fontFamily: 'Jaldi-bold',
        fontSize: 25,
        marginHorizontal: 10,
    },
    dayRow: {
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    day: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dayText: {
        fontFamily: 'Jaldi-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    date: {
        flex: 1,
        // // border checking
        // borderColor: 'black',
        // borderWidth: 1,
        height: 50,
        justifyContent: 'center',
    },
    dateText: {
        fontFamily: 'Jaldi-bold',
        fontSize: 22,
        textAlign: 'center',
    },
});

export default styles;