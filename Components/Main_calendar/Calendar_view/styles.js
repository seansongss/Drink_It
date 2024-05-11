import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        backgroundColor: '#FFF3D6',
    },
    calendar: {
        flex: 1,
        // height: '50%',
        // width: '80%',
        marginHorizontal: 20,
        backgroundColor: 'yellow',
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
        // justifyContent: 'space-around',
        // alignItems: 'center',
        textAlign: 'center',
    },
    dayText: {
        fontFamily: 'Jaldi-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    dateRow: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center',
    },
    date: {
        flex: 1,
        // // border checking
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },
    dateText: {
        // flex: 1,
        fontFamily: 'Jaldi-bold',
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 22,
        
        textAlign: 'center',
        // textAlignVertical: 'center',
        // justifyContent: 'center',
    },
});

export default styles;