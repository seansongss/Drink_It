import { Divider } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    calendarViewContainer: {
        flex: 2.5,
    },
    monthRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
    },
    monthContainer: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 1,
    },
    month: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 5,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    rankingContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },
    rankingItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    calendarContainer: {   
        flex: 8,
        backgroundColor: '#FFF3D6',
        borderRadius: 30,
        paddingHorizontal: 15,
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
    dateRow: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        flex: 1,
        justifyContent: 'center',
    },
    dateText: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 22,
        textAlign: 'center',
    },
    divider: {
        marginHorizontal: 10,
        borderRadius: 10,
    },
});

export default styles;