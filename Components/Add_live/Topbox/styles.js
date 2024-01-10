import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#597A82',
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        left: -10,
        marginBottom: 20,
    },
    emptyBox: {
        height: '60%',
    },
    timer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerBorder: {
        borderRadius: 30,
        borderColor: "#FFFFFF",
        borderWidth: 3,
        backgroundColor: '#A2B69F',
    },
    timerImage: {
        height: 30,
        width: 33,
        objectFit: 'fill',
        right: -22,
        zIndex: 1,
    },
    timerText: {
        padding: 7,
        paddingHorizontal: 20,
        fontSize: 18,
        textAlign: 'center',
        right: -5,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationBorder: {
        borderRadius: 30,
        borderColor: "#FFFFFF",
        borderWidth: 3,
        backgroundColor: '#A2B69F',
    },
    locationImage: {
        height: 30,
        width: 22,
        objectFit: 'fill',
        right: -15,
        zIndex: 1,
    },
    locationText: {
        padding: 7,
        paddingHorizontal: 20,
        fontSize: 18,
        textAlign: 'center',
        right: -5,
    },
});

export default styles;