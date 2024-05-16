import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        // height change to flexbox (or set height)
        height: 70,
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    date: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    location: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Jaldi_700Bold',
    },
});

export default styles;