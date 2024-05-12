import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        backgroundColor: '#FFF3D6',
    },
    calendar: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: 'yellow',
    },
    monthRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
    },
    monthContainer: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
    },
    rankingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    monthButton: {
        borderColor: 'black',
        borderWidth: 1,
    },
    month: {
        flex: 1,
        fontFamily: 'Jaldi_700Bold',
        fontSize: 22,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },
    ranking: {
        flex: 1,
        alignItems: 'center',
    },
    rankingImage: {
        flex: 1,
        width: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
    dayRow: {
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    day: {
        flex: 1,
        textAlign: 'center',
    },
    dayText: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 22,
        textAlign: 'center',
    },
    dateRow: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        flex: 1,
        // // border checking
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },
    dateText: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 22,
        textAlign: 'center',
    },
});

export default styles;