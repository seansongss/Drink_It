import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: -10,
    },
    month: {
        fontFamily: 'Jaldi-bold',
        fontSize: 25,
    },
    days: {
        fontFamily: 'Jaldi-bold',
        fontSize: 22,
        flex: 1,
        textAlign: 'center',
    },
    item: {
        fontFamily: 'Jaldi-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    image: {
        flex: 1,
    },
    dayRow: {
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rowItem: {
        flexDirection: 'row',
        padding: 17,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    longrowItem: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    divider: {
        marginHorizontal: 17,
        marginBottom: 15,
    },
    calendar: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 430,
        marginHorizontal: 20,
        marginTop: -5,
        paddingBottom: 15,
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default styles;