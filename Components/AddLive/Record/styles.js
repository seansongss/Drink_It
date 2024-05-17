import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addRecordContainer: {
        flex: 1,
        backgroundColor: "#b2d8b2",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    addRecordButton: {
        backgroundColor: "#f4d160",
        borderRadius: 10,
        padding: 10,
    },
    addRecordText: {
        fontFamily: "Jaldi_700Bold",
        fontSize: 20,
    },
    addRecordTextContainer: {
        marginVertical: 10,
    },
    addRecordTextWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    addRecordWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;