import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addUnitContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: "white",
    },
    addUnit: {
        alignItems: "center",
    },
    addFeelingContainer: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    addFeelingWrapper: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    addFeeling: {
        alignItems: "center",
    },
    addFeelingImage: {
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Jaldi_700Bold',
    },
});

export default styles;