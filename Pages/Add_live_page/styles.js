import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { backgroundColor: "#b2d8b2" },
    stage: {
        backgroundColor: "#e5eef4",
        // minHeight: "100%",
    },
    add_unit_container: {
        borderRadius: 10,
        borderColor: "#fef9d4",
        borderWidth: 4,
        backgroundColor: "white",
        width: "80%",
        marginHorizontal: "10%",
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    add_feeling_container: {
        backgroundColor: "#fff9da",
        width: "80%",
        marginHorizontal: "10%",
        fontFamily: "Jaldi-bold",
        padding: 20,
    },
    feeling_wrapper: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default styles;
