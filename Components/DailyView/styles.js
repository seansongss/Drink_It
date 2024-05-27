import { StyleSheet } from "react-native";
import { Divider } from "@rneui/base";

const styles = StyleSheet.create({
    dailyViewContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#A2B69F',
    },
    dailyViewWrapper: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 30,
    },
    dailyViewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 25,
        letterSpacing: 1, // Add this line to give letter spacing
    },
    divider: {
        borderRadius: 50,
        marginVertical: 15,
    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    unitListContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        borderRadius: 30,
        borderColor: '#E69C4D',
        borderWidth: 3,
    },
    unitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '30%', // Adjust width to fit three items per row
        justifyContent: 'center',
    },
    unitWrapper: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    dailyViewInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 30,
        padding: 10,
    },
    dailyViewFeeling: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        marginVertical: 10,
        paddingVertical: 15,
        backgroundColor: '#A2B69F',
        borderRadius: 30,
    },
    dailyViewNote: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#E69C4D',
    },
    noteText: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 18,
        marginHorizontal: 10,
    },
    text: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 18,
    },
});

export default styles;
