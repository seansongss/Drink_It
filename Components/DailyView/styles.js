import { StyleSheet } from "react-native";
import DailyView from "./DailyView";
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
    dateText:{
        fontFamily: 'Jaldi_700Bold',
        fontSize: 20,
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
    text: {
        fontFamily: 'Jaldi_700Bold',
        fontSize: 20,
    },
});

export default styles;