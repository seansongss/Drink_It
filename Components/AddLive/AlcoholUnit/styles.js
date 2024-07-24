import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addUnitContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "white",
    },
    deleteContainer: {
        marginVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 25,
    },
    addUnit: {
        alignItems: "center",
		justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Jaldi_700Bold',
    },
});

export default styles;